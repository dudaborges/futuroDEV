package com.aulaspring.primeiro.services;

import com.aulaspring.primeiro.model.Turma;
import com.aulaspring.primeiro.repositories.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurmaService {
    @Autowired
    private TurmaRepository turmaRepository;

    public void save(Turma turma){
        turmaRepository.save(turma);
    }

    public List<Turma> buscarTodos(){
        return turmaRepository.findAll();
    }
}
