package com.example.khai.repository;

import com.example.khai.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select * from product", nativeQuery = true )
    List<Product> findAll();
}
