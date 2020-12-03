package com.example.cartbe.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="user", schema = "cart_sc")
public class User {
    @Id
    private Integer id;
    private String userName;
    private String password;
}
