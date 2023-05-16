package com.example.demo_server.controller;

import com.example.demo_server.DTO.ProductTypeDTO;
import com.example.demo_server.service.IproductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productTypes")
@CrossOrigin("*")
public class ProductTypeRestController {
    @Autowired
    private IproductTypeService productTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductTypeDTO> getAllproductTypes () {
        return productTypeService.findAll();
    }
}
