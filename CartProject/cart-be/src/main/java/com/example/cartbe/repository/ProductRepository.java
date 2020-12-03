package com.example.cartbe.repository;


import com.example.cartbe.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAll();
    Product findProductById(Integer id);
}
