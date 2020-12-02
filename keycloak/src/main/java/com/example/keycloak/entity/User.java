package com.example.keycloak.entity;

import lombok.Data;

@Data
public class User {
    private int id;
    private String name;
    private int old;
    private String userName;
    private String password;
}
