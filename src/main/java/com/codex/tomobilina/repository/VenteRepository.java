package com.codex.tomobilina.repository;

import com.codex.tomobilina.models.User;
import com.codex.tomobilina.models.Vente;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.util.List;

public interface VenteRepository  extends JpaRepository<Vente, String> {
    @Query("select vente from Vente vente where vente.user.id = :id")
    List<Vente> findByUser_Id(@Param("id") String id);

    @Query("select v from Vente v where month(v.dateheure) = month(:date) and year(v.dateheure) = year (:date)")
    List<Vente> findByDateheure(@Param("date") Timestamp date);

    @Query("SELECT v FROM Vente v " +
            "WHERE MONTH(v.dateheure) = month(:date) " +
            "AND YEAR(v.dateheure) = year(:date) " +
            "ORDER BY (v.montant * (1 + v.percentCommission)) / v.montant DESC")
    List<Vente> findTopSalesByMonthOrderByCommissionAndPrice(@Param("date") Timestamp date, Pageable pageable);

}
