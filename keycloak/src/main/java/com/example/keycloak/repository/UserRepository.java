package com.example.keycloak.repository;

import com.example.keycloak.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findUserByUsername(String username);
    List<User> findAll();
    User findByUsername(String username);
}
