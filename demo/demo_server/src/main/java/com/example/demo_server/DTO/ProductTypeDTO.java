package com.example.demo_server.DTO;

import java.util.Set;

public class ProductTypeDTO {
    private Integer id;
    private String name;
    private Set<ProductDTO> productDTOSet;

    public ProductTypeDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ProductDTO> getproductDTOSet() {
        return productDTOSet;
    }

    public void setproductDTOSet(Set<ProductDTO> productDTOSet) {
        this.productDTOSet = productDTOSet;
    }
}
