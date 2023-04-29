package com.aulaspring.primeiro.controllers;

import com.aulaspring.primeiro.models.Aluno;
import com.aulaspring.primeiro.repositories.AlunoRepository;
import com.aulaspring.primeiro.services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/alunos")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public ResponseEntity<List<Aluno>> findAll() {
        return ResponseEntity.ok().body(alunoService.findAll());
    }

    @GetMapping(value = "/alunosTurma")
    public ResponseEntity<List<Aluno>> findAlunoTurma() {
        return ResponseEntity.ok().body(alunoService.findAlunoTurma());
    }

    @PostMapping
    public ResponseEntity<Aluno> save(@RequestBody Aluno aluno) {
        return ResponseEntity.created(null).body(alunoService.save(aluno));
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Aluno> update(@PathVariable Long id,
                                        @RequestBody Aluno aluno) {
        if ( alunoService.existsById(id) ) {
            return ResponseEntity.ok().body(alunoService.update(aluno));
        } else {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        if ( alunoService.existsById(id) ) {
            alunoService.delete(id);
            return ResponseEntity.accepted().build();
        } else {
            return ResponseEntity.status(406).build();
        }
    }
}
