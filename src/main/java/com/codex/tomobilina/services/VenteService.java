/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codex.tomobilina.services;

import com.codex.tomobilina.models.Vente;
import com.codex.tomobilina.repository.VenteRepository;
import java.sql.Timestamp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author Tohy
 */

@Service
public class VenteService {
    @Autowired
    private VenteRepository venteRepository;
    
    public List<Vente> getAllVente() {
        return venteRepository.findAll();
    }
    
    public List<Vente> getAllVenteUser(String id) {
        return venteRepository.findByUser_Id(id);
    }
    
    public List<Vente> getAllVenteMonth(Timestamp date) {
        return venteRepository.findByDateheure(date);
    }
    
    public double getCommissionMonth(Timestamp date) {
        double ans = 0;
        List<Vente> venteMonth = venteRepository.findByDateheure(date);
        for (Vente vente : venteMonth) {
            ans+=((vente.getMontant()*vente.getPercentCommission())/100);
        }
        
        return ans;
    }
    
    public List<Vente> getTopSalesOfMonth(Timestamp date, int nbr) {
        PageRequest pageable = PageRequest.of(0, nbr);
        return venteRepository.findTopSalesByMonthOrderByCommissionAndPrice(date, pageable);
    }
    
    public Vente saveVente(Vente vente) { return venteRepository.save(vente); }
}
