package com.aulaspring.primeiro.services;

import com.aulaspring.primeiro.models.Aluno;
import com.aulaspring.primeiro.repositories.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public Aluno save(Aluno aluno){
       return alunoRepository.save(aluno);
    }

    public List<Aluno> findAll(){
        return alunoRepository.findAll();
    }

    public List<Aluno> findAlunoTurma() {
        return alunoRepository.findAlunoTurma();
    }

    public boolean existsById(Long id) {
        return alunoRepository.existsById(id);
    }

    public Aluno update(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public Aluno findById(Long id){
        Optional<Aluno> aluno = alunoRepository.findById(id);
        if ( aluno.isPresent() ) {
            return aluno.get();
        } else {
            return null;
        }
    }

    public void delete(Long id) {
        Aluno aluno = findById(id);
        if ( aluno != null ){
            alunoRepository.delete(aluno);
        }
    }
}
