/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codex.tomobilina.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.sql.Timestamp;

/**
 *
 * @author Tohy
 */

@Entity
@Table(name = "vente")
public class Vente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idvente")
    private String idVente;
    
    @ManyToOne
    @JoinColumn(name = "idannonce", referencedColumnName = "idAnnonce")
    private Annonce annonce;
    
    @ManyToOne
    @JoinColumn(name = "iduser", referencedColumnName = "id")
    private User user;
    
    private double montant;
    @Column(name = "percentcommission")
    private double percentCommission;
    private Timestamp dateheure;

    public Vente(Annonce annonce, User user, double montant, double percentCommission, Timestamp dateheure) {
        this.annonce = annonce;
        this.user = user;
        this.montant = montant;
        this.percentCommission = percentCommission;
        this.dateheure = dateheure;
    }
    
    public Vente() {
    }

    public String getIdVente() {
        return idVente;
    }

    public void setIdVente(String idVente) {
        this.idVente = idVente;
    }

    public Annonce getAnnonce() {
        return annonce;
    }

    public void setAnnonce(Annonce annonce) {
        this.annonce = annonce;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public double getMontant() {
        return montant;
    }

    public void setMontant(double montant) {
        this.montant = montant;
    }

    public double getPercentCommission() {
        return percentCommission;
    }

    public void setPercentCommission(double percentCommission) {
        this.percentCommission = percentCommission;
    }

    public Timestamp getDateheure() {
        return dateheure;
    }

    public void setDateheure(Timestamp dateheure) {
        this.dateheure = dateheure;
    }
}
