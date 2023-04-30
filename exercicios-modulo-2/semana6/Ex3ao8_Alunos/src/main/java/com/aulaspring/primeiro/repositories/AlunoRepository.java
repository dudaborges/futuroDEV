package com.aulaspring.primeiro.repositories;

import com.aulaspring.primeiro.models.Aluno;
import com.aulaspring.primeiro.models.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {

    public List<Aluno> findByIdade(Integer idade);

    public List<Aluno> findByTurma(Turma turma);

    @Query("select aluno from Aluno aluno "+
            "where aluno.turma is not null")
    public List<Aluno> findAlunoTurma();

    //  select a.nome nome_aluno, t.nome turma from tb_aluno a
    //	left join tb_turma t on ( t.id = a.turma_id )
    //	where t notnull;

}
