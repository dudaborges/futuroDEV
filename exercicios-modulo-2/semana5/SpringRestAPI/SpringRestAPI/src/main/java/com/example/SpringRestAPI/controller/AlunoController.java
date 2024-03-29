package com.example.SpringRestAPI.controller;

import com.example.SpringRestAPI.model.Aluno;
import com.example.SpringRestAPI.repository.AlunoRepository;
import com.example.SpringRestAPI.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/alunos")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping
    public ResponseEntity<List<Aluno>> findAll(){
        return ResponseEntity.ok().body(alunoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aluno> getAlunoById(@PathVariable Long id) {
        Optional<Aluno> aluno = alunoRepository.findById(id);
        if ( aluno.isPresent() ) {
            return ResponseEntity.ok(aluno.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Aluno> save(@RequestParam("nome") String nome) {
        Aluno aluno = new Aluno();
        aluno.setNome(nome);
        Aluno alunoSalvo = alunoService.save(aluno);
        return ResponseEntity.ok().body(alunoSalvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aluno> update(@PathVariable Long id, @RequestBody Aluno aluno) {
        if ( alunoService.existsById(id) ) {
            return ResponseEntity.ok().body(alunoService.update(aluno));
        } else {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Aluno> delete(@PathVariable Long id) {
        if ( alunoService.existsById(id) ) {
            alunoService.delete(id);
            return ResponseEntity.accepted().build();
        } else {
            return ResponseEntity.status(406).build();
        }
    }

    @GetMapping("/cpf")
    public ResponseEntity<List<Aluno>> buscarCpf(@RequestParam("cpf") String cpf) {
        if ( !AlunoService.validarCpf(cpf) ) {
            return ResponseEntity.badRequest().build();
        }
        List<Aluno> alunos = alunoRepository.findByCpf(cpf);
        return ResponseEntity.ok(alunos);
    }

    @PostMapping("/media")
    public ResponseEntity<Double> calcularMedia(@RequestParam("nota1") Double nota1,
                                                @RequestParam("nota2") Double nota2,
                                                @RequestParam("nota3") Double nota3){
        if (nota1 == null || nota2 == null || nota3 == null) {
            return ResponseEntity.badRequest().build();
        }
        double media = (nota1 + nota2 + nota3) / 3.0;
        return ResponseEntity.ok(media);
    }
}
