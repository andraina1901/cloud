package com.sergio.jwt.backend.controllers;

import com.sergio.jwt.backend.config.UserAuthenticationProvider;
import com.sergio.jwt.backend.entites.Categ;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

@RequiredArgsConstructor
@RestController
public class MessagesController {
    
    private final UserAuthenticationProvider userAuthenticationProvider;

    @GetMapping("/messages")
    public ResponseEntity<List<String>> messages() {
        return ResponseEntity.ok(Arrays.asList("first", "second"));
    }
    
    @GetMapping("/categorys")
    public ResponseEntity<Categ[]> category() {
        Categ[] cat = new Categ[2];
        cat[0] = new Categ("Cat001","4x4");
        cat[1] = new Categ("Cat002","Camion");
        return ResponseEntity.ok(cat);
    }
    
    @GetMapping("/marques")
    public ResponseEntity<List<String>> marques(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        System.out.println(token);
        return ResponseEntity.ok(Arrays.asList("TOYOTA", "KIA"));
    }
}
