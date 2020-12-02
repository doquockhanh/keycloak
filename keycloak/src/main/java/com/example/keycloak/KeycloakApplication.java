package com.example.keycloak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class KeycloakApplication {

    public static void main(String[] args) {
        SpringApplication.run(KeycloakApplication.class, args);
    }

}
