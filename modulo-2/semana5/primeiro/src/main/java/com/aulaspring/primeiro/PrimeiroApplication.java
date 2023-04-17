package com.aulaspring.primeiro;

import com.aulaspring.primeiro.model.Turma;
import com.aulaspring.primeiro.services.TurmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PrimeiroApplication implements CommandLineRunner {

	@Autowired
	private TurmaService turmaService;

	public static void main(String[] args) {
		SpringApplication.run(PrimeiroApplication.class, args);



	}

	@Override
	public void run(String... args) throws Exception {
		Turma turma1 = new Turma();
		turma1.setNome("Santinho");

		Turma turma2 = new Turma();
		turma2.setNome("Palhoça");

		turmaService.save(turma1);
		turmaService.save(turma2);
	}
}
