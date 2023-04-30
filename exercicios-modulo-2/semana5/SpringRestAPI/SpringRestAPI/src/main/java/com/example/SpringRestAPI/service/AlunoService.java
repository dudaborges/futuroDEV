package com.example.SpringRestAPI.service;

import com.example.SpringRestAPI.model.Aluno;
import com.example.SpringRestAPI.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;

    public Aluno save(Aluno aluno) {
        return alunoRepository.save(aluno);
    }
    public List<Aluno> findAll() {
        return alunoRepository.findAll();
    }

    public boolean existsById(Long id) {
        return alunoRepository.existsById(id);
    }

    public Aluno findById(Long id) {
        Optional<Aluno> aluno = alunoRepository.findById(id);
        return aluno.orElse(null);
    }

    public Aluno update(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public void delete(Long id) {
        Aluno aluno = findById(id);
        if ( aluno != null ) {
            alunoRepository.delete(aluno);
        }
    }
}
