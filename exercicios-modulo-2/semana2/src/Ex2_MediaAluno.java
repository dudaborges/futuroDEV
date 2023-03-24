import java.util.ArrayList;
import java.util.Scanner;

public class Ex2_MediaAluno {
    public static void main(String[] args) {
        ArrayList<Ex1_Aluno> alunos = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        Ex1_Aluno aluno1 = new Ex1_Aluno();
        aluno1.setMatricula(555L);
        aluno1.setNome("Benta");
        System.out.println("Preencha as notas do aluno(a) " + aluno1.getNome());
        aluno1.setTurma("6 ano");
        System.out.println("Digite a nota 1");
        aluno1.setNota1(scanner.nextDouble());
        System.out.println("Digite a nota 2");
        aluno1.setNota2(scanner.nextDouble());
        System.out.println("Digite a nota 3");
        aluno1.setNota3(scanner.nextDouble());
        System.out.println("Digite a nota 4");
        aluno1.setNota4(scanner.nextDouble());
        aluno1.setMedia((aluno1.getNota1() + aluno1.getNota2() + aluno1.getNota3() + aluno1.getNota4()) / 4);

        Ex1_Aluno aluno2 = new Ex1_Aluno();
        aluno2.setMatricula(635L);
        aluno2.setNome("Melissa");
        System.out.println("Preencha as notas do aluno(a) " + aluno2.getNome());
        aluno2.setTurma("3 ano do EM");
        System.out.println("Digite a nota 1");
        aluno2.setNota1(scanner.nextDouble());
        System.out.println("Digite a nota 2");
        aluno2.setNota2(scanner.nextDouble());
        System.out.println("Digite a nota 3");
        aluno2.setNota3(scanner.nextDouble());
        System.out.println("Digite a nota 4");
        aluno2.setNota4(scanner.nextDouble());
        aluno2.setMedia((aluno2.getNota1() + aluno2.getNota2() + aluno2.getNota3() + aluno2.getNota4()) / 4);

        Ex1_Aluno aluno3 = new Ex1_Aluno();

        aluno3.setMatricula(786L);
        aluno3.setNome("Melanie");
        System.out.println("Preencha as notas do aluno(a) " + aluno3.getNome());
        aluno3.setTurma("2 ano do EM");
        System.out.println("Digite a nota 1");
        aluno3.setNota1(scanner.nextDouble());
        System.out.println("Digite a nota 2");
        aluno3.setNota2(scanner.nextDouble());
        System.out.println("Digite a nota 3");
        aluno3.setNota3(scanner.nextDouble());
        System.out.println("Digite a nota 4");
        aluno3.setNota4(scanner.nextDouble());
        aluno3.setMedia((aluno3.getNota1() + aluno3.getNota2() + aluno3.getNota3() + aluno3.getNota4()) / 4);

        Ex1_Aluno aluno4 = new Ex1_Aluno();
        aluno4.setMatricula(647L);
        aluno4.setNome("Bernardo");
        System.out.println("Preencha as notas do aluno(a) " + aluno4.getNome());
        aluno4.setTurma("7 ano");
        System.out.println("Digite a nota 1");
        aluno4.setNota1(scanner.nextDouble());
        System.out.println("Digite a nota 2");
        aluno4.setNota2(scanner.nextDouble());
        System.out.println("Digite a nota 3");
        aluno4.setNota3(scanner.nextDouble());
        System.out.println("Digite a nota 4");
        aluno4.setNota4(scanner.nextDouble());
        aluno4.setMedia((aluno4.getNota1() + aluno4.getNota2() + aluno4.getNota3() + aluno4.getNota4()) / 4);

        Ex1_Aluno aluno5 = new Ex1_Aluno();
        aluno5.setMatricula(285L);
        aluno5.setNome("Marcia");
        System.out.println("Preencha as notas do aluno(a) " + aluno5.getNome());
        aluno5.setTurma("6 ano");
        System.out.println("Digite a nota 1");
        aluno5.setNota1(scanner.nextDouble());
        System.out.println("Digite a nota 2");
        aluno5.setNota2(scanner.nextDouble());
        System.out.println("Digite a nota 3");
        aluno5.setNota3(scanner.nextDouble());
        System.out.println("Digite a nota 4");
        aluno5.setNota4(scanner.nextDouble());
        aluno5.setMedia((aluno5.getNota1() + aluno5.getNota2() + aluno5.getNota3() + aluno5.getNota4()) / 4);


        alunos.add(aluno1);
        alunos.add(aluno2);
        alunos.add(aluno3);
        alunos.add(aluno4);
        alunos.add(aluno5);


        for(Ex1_Aluno a : alunos){
            if(a.getMedia() >= 7){
                System.out.println("Aluno: " + a.getNome() + "Média: " + a.getMedia() + "Status: APROVADO");
            }else{
                System.out.println("Aluno: " + a.getNome() + "Média: " + a.getMedia() + "Status: REPROVADO");
            }
        }
    }

}
