/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.codex.tomobilina.repository;

import com.codex.tomobilina.models.PhotoAnnonce;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Tohy
 */
public interface PhotoAnnonceRepository extends JpaRepository<PhotoAnnonce, Long> {
    
}
