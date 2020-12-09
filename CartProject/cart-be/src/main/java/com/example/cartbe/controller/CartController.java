package com.example.cartbe.controller;



import com.example.cartbe.entity.Product;
import com.example.cartbe.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(originPatterns = "*")
@SessionAttributes("Cart")
public class CartController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/getAllProduct")
    public ResponseEntity<List<Product>> getAllProduct(){
        List<Product> products = productRepository.findAll();

        if(products == null || products.size() == 0){
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.OK);
        }

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/addSomeThingToCart/{id}")
    public void addSomething(@PathVariable Integer id, @SessionAttribute("Card") List<Product> products){
        products.add(productRepository.findProductById(id));
    }

    @ModelAttribute("Cart")
    public List<Product> cart(){
        return new ArrayList<>();
    }

    @GetMapping("/getCart")
    public ResponseEntity<List<Product>> getCart( @SessionAttribute("Card") List<Product> products){
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
