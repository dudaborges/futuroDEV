package com.aulaspring.primeiro.repositories;

import com.aulaspring.primeiro.models.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long> {

    public List<Turma> findByNome(String nome);
}
