package com.example.demo_server.service.impl;
import com.example.demo_server.DTO.ProductTypeDTO;
import com.example.demo_server.entity.ProductType;
import com.example.demo_server.repository.IProductTypeRepository;
import com.example.demo_server.service.IproductTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductTypeService implements IproductTypeService {
    @Autowired
    private IProductTypeRepository productTypeRepository;

    @Override
    public List<ProductTypeDTO> findAll() {
        List<ProductType> productTypeList = productTypeRepository.findAllproductTypes();
        List<ProductTypeDTO> productTypeDTOList = new ArrayList<>();
        ProductTypeDTO productTypeDTO;
        for (ProductType productType: productTypeList) {
            productTypeDTO = new ProductTypeDTO();
            BeanUtils.copyProperties(productType, productTypeDTO);
            productTypeDTOList.add(productTypeDTO);
        }
        return productTypeDTOList;
    }
}
