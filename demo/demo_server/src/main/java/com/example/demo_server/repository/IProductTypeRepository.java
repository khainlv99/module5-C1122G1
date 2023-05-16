package com.example.demo_server.repository;

import com.example.demo_server.entity.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
    @Query(value = "select * from product_type", nativeQuery = true)
    List<ProductType> findAllproductTypes();

    @Query(value = "select * from product_type where id = :id", nativeQuery = true)
    ProductType findTypeOfproductById(@Param("id") Integer id);
}
