package com.example.SpringRestAPI.service;

import com.example.SpringRestAPI.model.IMC;
import com.example.SpringRestAPI.repository.IMCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IMCService {
    @Autowired
    private IMCRepository IMCRepository;

    public IMC save(IMC IMC) {
        return IMCRepository.save(IMC);
    }
    public List<IMC> findAll() {
        return IMCRepository.findAll();
    }

    public boolean existsById(Long id) {
        return IMCRepository.existsById(id);
    }

    public IMC findById(Long id) {
        Optional<IMC> aluno = IMCRepository.findById(id);
        return aluno.orElse(null);
    }

}
