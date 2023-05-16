package com.example.demo_server.service;

import com.example.demo_server.DTO.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<ProductDTO> findAll(String name, String bookTypeId , Pageable pageable);
    void save(ProductDTO bookDTO);
    void delete (Integer id);
    ProductDTO findById(Integer id);
    void update(ProductDTO bookDTO);
}
