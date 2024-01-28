/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codex.tomobilina.controllers;

import java.util.List;
import java.util.Optional;
import jakarta.persistence.EntityNotFoundException;
import com.codex.tomobilina.models.Couleurs;
import com.codex.tomobilina.models.Resultat;
import com.codex.tomobilina.services.CouleursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Tohy
 */
@RestController
@RequestMapping("tomobilina/couleurs")
@CrossOrigin
public class CouleursController {
    @Autowired
    private CouleursService couleursService;

    @GetMapping
    public ResponseEntity<Resultat> getAllCouleurs() {
        try {
            List<Couleurs> an = couleursService.getAllCouleurs();
            Resultat resultat = new Resultat("OK", null, an);
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT FOUND", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resultat> getCouleursById(@PathVariable String id) {
        try {
            Optional<Couleurs> col = couleursService.getCouleursById(id);
            if (col.isEmpty()) {
                Resultat resultat = new Resultat("NOT FOUND", "Coouleur Not Found", null);
                return new ResponseEntity<>(resultat, HttpStatus.NOT_FOUND);
            }
            Resultat resultat = new Resultat("OK", null, col.get());
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT FOUND", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Resultat> add(@RequestBody Couleurs couleur) {
        try {
            Resultat resultat = new Resultat("CREATED", null, couleursService.saveCouleurs(couleur));
            return new ResponseEntity<>(resultat, HttpStatus.CREATED);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT CREATED", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Resultat> updateCouleur(@PathVariable String id, @RequestBody Couleurs col) {
        try {
            Resultat resultat = new Resultat("Couleurs UPDATED", null, couleursService.updateCouleurs(id, col));
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("Couleurs NOT UPDATED", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Resultat> deleteCouleur(@PathVariable String id) {
        try {
            Couleurs col = couleursService.getCouleursById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Entité Couleur non trouvée"));

            col.setEtat(0);

            couleursService.saveCouleurs(col);

            Resultat resultat = new Resultat("DELETED", null, col);
            return new ResponseEntity<>(resultat, HttpStatus.OK);
        } catch (Exception e) {
            Resultat resultat = new Resultat("NOT DELETED", e.getMessage(), null);
            return new ResponseEntity<>(resultat, HttpStatus.BAD_REQUEST);
        }
    }
}
