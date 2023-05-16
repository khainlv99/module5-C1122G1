package com.example.demo_server.service.impl;
import com.example.demo_server.DTO.ProductDTO;
import com.example.demo_server.DTO.ProductTypeDTO;
import com.example.demo_server.entity.Product;
import com.example.demo_server.repository.IProductRepository;
import com.example.demo_server.repository.IProductTypeRepository;
import com.example.demo_server.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IProductTypeRepository productTypeRepository;

    @Override
    public Page<ProductDTO> findAll(String name, String productTypeId , Pageable pageable) {
        Page<Product> productPage = productRepository.findAllproducts(name,productTypeId,pageable);
        List<ProductDTO> productDTOList = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product: productPage) {
            productDTO = new ProductDTO();
            productDTO.setproductTypeDTO(new ProductTypeDTO());
            BeanUtils.copyProperties(product.getproductType(), productDTO.getproductTypeDTO());
            BeanUtils.copyProperties(product, productDTO);
            productDTOList.add(productDTO);
        }
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }

    @Override
    public void save(ProductDTO productDTO) {
        Product product = new Product();
        product.setproductType(productTypeRepository.findTypeOfproductById(productDTO.getproductTypeDTO().getId()));
        BeanUtils.copyProperties(productDTO, product);
        productRepository.addproduct(product.getCode(),
                product.getImportedDate(),
                product.getName(),
                product.getQuantity(),
                product.getproductType().getId());
    }

    @Override
    public void delete(Integer id) {
        productRepository.deleteproduct(id);
    }

    @Override
    public ProductDTO findById(Integer id) {
        Product product = productRepository.findproductWithId(id);
        ProductDTO productDTO = new ProductDTO();
        productDTO.setproductTypeDTO(new ProductTypeDTO());
        BeanUtils.copyProperties(product.getproductType(), productDTO.getproductTypeDTO());
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    @Override
    public void update(ProductDTO productDTO) {
        Product product = new Product();
        product.setproductType(productTypeRepository.findTypeOfproductById(productDTO.getproductTypeDTO().getId()));
        BeanUtils.copyProperties(productDTO, product);
        productRepository.updateproduct(product.getCode(),
                product.getImportedDate(),
                product.getName(),
                product.getQuantity(),
                product.getproductType().getId(),
                product.getId());
    }
}
