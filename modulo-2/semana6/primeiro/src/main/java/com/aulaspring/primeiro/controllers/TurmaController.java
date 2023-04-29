package com.aulaspring.primeiro.controllers;

import com.aulaspring.primeiro.models.Turma;
import com.aulaspring.primeiro.services.TurmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/turmas")
public class TurmaController {

    @Autowired
    private TurmaService turmaService;

    // metodo para responder o POST utilizando RequestParam
//    @PostMapping
//    public ResponseEntity<Turma> save(@RequestParam("nome") String nomeTurma ) {
//        Turma turma = new Turma();
//        turma.setNome(nomeTurma);
//        Turma turmaSalva = turmaService.save(turma);
//        return ResponseEntity.ok().body(turmaSalva);
//    }

    // metodo para responder o POST utilizando RequestBody retornando um long
//    @PostMapping
//    public Long save (@RequestBody Turma turma) {
//        Long idObjeto = turmaService.save(turma).getId();
//        return idObjeto;
//    }

    // metodo para responder o POST utilizando RequestBody retornando Turma
    @PostMapping
    public ResponseEntity<Turma> save(@RequestBody Turma turma) {
        return ResponseEntity.created(null).body(turmaService.save(turma));
    }


    @GetMapping
    public ResponseEntity<List<Turma>> findAll(){
        return ResponseEntity.ok().body(turmaService.findAll());
    }

    //metodo para responder GET buscando por ID
    @GetMapping(value = "/buscaPorId")
    public ResponseEntity<Turma> findById(@RequestParam("id") Long idTurma){
        Turma turma = new Turma();
        turma = turmaService.findById(idTurma);
        if ( turma != null ){
            return ResponseEntity.ok().body(turma);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping(value = "/buscaPorNome")
    public ResponseEntity<List<Turma>> findByNome(@RequestParam("nome") String nomeTurma){
        List<Turma> turmas = turmaService.findByNome(nomeTurma);
        return ResponseEntity.ok().body(turmas);
    }

}
