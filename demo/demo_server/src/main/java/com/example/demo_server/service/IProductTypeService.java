package com.example.demo_server.service;

import com.example.demo_server.DTO.ProductTypeDTO;

import java.util.List;

public interface IproductTypeService {
    List<ProductTypeDTO> findAll();
}
