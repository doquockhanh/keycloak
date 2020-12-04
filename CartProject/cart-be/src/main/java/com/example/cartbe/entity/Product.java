package com.example.cartbe.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="product", schema = "cart_sc")
public class Product {
    @Id
    private Integer id;
    private String name;
    private Long price;
    private String img;
}
