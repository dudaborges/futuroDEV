public class Main {
    public static void main(String[] args) {
        Carro carro1 = new Carro();

//        Não é uma boa prática atribuir dessa forma
//        carro1.marca = "Jeep";
//        carro1.modelo = "Jeep Renegade";
//        carro1.ano = 2022;
//        carro1.cor = "Preto";
//        carro1.preco = 86990.0;
//        carro1.acelerar();

        carro1.setModelo("Jeep Renegade");
        System.out.println(carro1.getModelo());

        Aluno aluno1 = new Aluno(1L, "Maria Eduarda", "Santinho");
        System.out.println(aluno1);
        aluno1.setEstudou(70);

        Pessoa pessoa1 = new Pessoa();
        pessoa1.setNome("Maria Eduarda");
        pessoa1.setSobrenome("Pereira Borges");
        pessoa1.setMaiorDeIdade(18);
        System.out.println(pessoa1);
    }
}
