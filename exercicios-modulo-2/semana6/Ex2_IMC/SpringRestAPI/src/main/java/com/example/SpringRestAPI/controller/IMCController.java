package com.example.SpringRestAPI.controller;

import com.example.SpringRestAPI.model.IMC;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class IMCController {
    @PostMapping("/imc")
    public ResponseEntity<?> calcularIMC(@RequestBody IMC imc) {
        double peso = imc.getPeso();
        double altura = imc.getAltura();

        if(peso <= 0 || altura <= 0) {
            return ResponseEntity.badRequest().body("Os números não podem ser negativos.");
        }

        Double calculoIMC = peso / (altura * altura);
        return ResponseEntity.ok(calculoIMC);
    }
}
