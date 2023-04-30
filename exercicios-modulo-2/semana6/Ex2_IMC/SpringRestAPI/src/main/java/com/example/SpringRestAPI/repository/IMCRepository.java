package com.example.SpringRestAPI.repository;

import com.example.SpringRestAPI.model.IMC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMCRepository extends JpaRepository<IMC, Long> {
}
