package com.example.demo_server.repository;
import com.example.demo_server.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product where name like concat('%', :name, '%') " +
            "and product_type_id like concat('%', :id, '%')", nativeQuery = true)
    Page<Product> findAllproducts(@Param("name") String name, @Param("id") String productTypeId, Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "insert into product (code, imported_date, `name`, quantity, product_type_id) " +
            "values (:code, :importedDate, :name, :quantity, :productTypeId)", nativeQuery = true)
    void addproduct (@Param("code") String code,
                  @Param("importedDate") String importedDate,
                  @Param("name") String name,
                  @Param("quantity") Integer quantity,
                  @Param("productTypeId") Integer productTypeId);

    @Modifying
    @Transactional
    @Query(value = "delete from product where id = :id", nativeQuery = true)
    void deleteproduct(@Param("id") Integer id);

    @Query(value = "select * from product where id = :id", nativeQuery = true)
    Product findproductWithId(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update product set code = :code, name = :name, imported_date = :importedDate, " +
            "quantity = :quantity, product_type_id = :productTypeId where id = :id", nativeQuery = true)
    void updateproduct(@Param("code") String code,
                    @Param("importedDate") String importedDate,
                    @Param("name") String name,
                    @Param("quantity") Integer quantity,
                    @Param("productTypeId") Integer productTypeId,
                    @Param("id") Integer id);
}
