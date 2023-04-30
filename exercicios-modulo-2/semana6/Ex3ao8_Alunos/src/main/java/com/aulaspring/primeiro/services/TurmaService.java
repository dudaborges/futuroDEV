package com.aulaspring.primeiro.services;

import com.aulaspring.primeiro.models.Turma;
import com.aulaspring.primeiro.repositories.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurmaService {

    @Autowired
    private TurmaRepository turmaRepository;

    public Turma save(Turma turma){
        return turmaRepository.save(turma);
    }

    public List<Turma> findAll(){
        return turmaRepository.findAll();
    }

    public Turma findById(Long idTurma){
        Optional<Turma> turma = turmaRepository.findById(idTurma);
        if ( turma.isPresent() ) {
            return turma.get();
        } else {
            return null;
        }
    }

    public List<Turma> findByNome(String nomeTurma){
        List<Turma> turmas = null;
        turmas = turmaRepository.findByNome(nomeTurma);
        return turmas;
    }

}
