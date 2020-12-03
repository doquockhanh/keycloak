package com.example.cartbe.controller;


import com.example.cartbe.entity.Message;
import com.example.cartbe.entity.User;
import com.example.cartbe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "*")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<Message> login(@RequestBody User user){
        Message message = new Message();
        message.setNote(false);
        User userFound = userRepository.findUserByUserName(user.getUserName());
        if(userFound == null){
            message.setMessage("Account not exist");
            return new ResponseEntity<>(message, HttpStatus.OK);
        }

        if(userFound.getPassword().equals(user.getPassword())){
            message.setMessage("Login successful");
            message.setNote(true);
            return new ResponseEntity<>(message, HttpStatus.OK);
        }else {
            message.setMessage("Wrong password");
            return new ResponseEntity<>(message, HttpStatus.OK);
        }
    }
}
