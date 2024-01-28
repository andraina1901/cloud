package com.codex.tomobilina.repository;

import com.codex.tomobilina.models.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnnonceRepository extends JpaRepository<Annonce, String> {
    @Query("select an from Annonce an where an.user.id = :id ")
    List<Annonce> findByUser_Id(@Param("id") int id);

    @Query("select an from Annonce an where an.etat = :state ")
    List<Annonce> findByEtat(@Param("state") int state);

    List<Annonce> findByVoiture_IdVoitureInAndPrixBetween(
            List<String> idVoitures, double prixMin, double prixMax
    );
}
