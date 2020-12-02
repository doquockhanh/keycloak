package com.example.keycloak.controller;

import com.example.keycloak.entity.User;
import com.example.keycloak.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MainController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    private String goHome(Model model){
        List<User> users = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            User user = new User();
            user.setId(i);
            user.setName("khanh " + i);
            user.setOld(10 + i);
            user.setUserName("quockhanh" + i);
            user.setPassword("123");
            users.add(user);
        }
        users = userRepository.findAll();
        model.addAttribute("Users", users);
        return "home";
    }
}
