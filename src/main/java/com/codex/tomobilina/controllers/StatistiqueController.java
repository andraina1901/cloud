/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codex.tomobilina.controllers;

import com.codex.tomobilina.models.Resultat;
import com.codex.tomobilina.models.User;
import com.codex.tomobilina.models.Vente;
import com.codex.tomobilina.repository.UserRepository;
import com.codex.tomobilina.services.VenteService;
import java.sql.Timestamp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Tohy
 */
@RestController
@RequestMapping("/tomobilina/stat")
public class StatistiqueController {
  @Autowired
  UserRepository userRepository;
  
  @Autowired
  VenteService venteService;
  
    @GetMapping("/usermonth")
    public ResponseEntity<Resultat> getListUserMois(@Param("date") Timestamp date) {
        try {
            List<User> listU = userRepository.findByDateheure(date);
            Resultat resultat = new Resultat("OK", null, listU);
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT FOUND", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/salesmonth")
    public ResponseEntity<Resultat> getListVenteMois(@Param("date") Timestamp date) {
        try {
            List<Vente> listU = venteService.getAllVenteMonth(date);
            Resultat resultat = new Resultat("OK", null, listU);
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT FOUND", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/commissionmonth")
    public ResponseEntity<Resultat> getCommissionMonth(@Param("date") Timestamp date) {
        try {
            double commission = venteService.getCommissionMonth(date);
            Resultat resultat = new Resultat("OK", null, commission);
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT FOUND", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/topsalesmonth")
    public ResponseEntity<Resultat> getTopSalesMonth(@Param("date") Timestamp date) {
        try {
            List<Vente> listV = venteService.getTopSalesOfMonth(date, 5);
            Resultat resultat = new Resultat("OK", null, listV);
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT FOUND", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.NOT_FOUND);
        }
    }
}
