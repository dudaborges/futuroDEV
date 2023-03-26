public class Ex4_Pessoa {
    private String nome;
    protected int idade;
    public String endereco;

    public Ex4_Pessoa(String nome, int idade, String endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    public void saudacao(){
        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
    }

}
