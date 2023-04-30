package com.example.SpringRestAPI.repository;

import com.example.SpringRestAPI.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    List<Aluno> findByCpf(String cpf);
    List<Aluno> findByNomeIdade(String nome, Integer idade);

}
