/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codex.tomobilina.services;

import com.codex.tomobilina.models.Favori;
import com.codex.tomobilina.repository.FavoriRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Tohy
 */

@Service
public class FavoriService {
    @Autowired
    private FavoriRepository favoriRepository;
    
    public List<Favori> getAllFavoriUser(int idUser) {
        return favoriRepository.findByUser_Id(idUser);
    }
    
    public Optional<Favori> getFavoriById(String id) { return favoriRepository.findById(id); }
    
    public Favori saveFavori(Favori fav) { return favoriRepository.save(fav); }
}
