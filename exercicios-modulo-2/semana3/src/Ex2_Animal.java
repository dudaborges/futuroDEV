public class Ex2_Animal {
    private String nome;
    private int idade;

    public Ex2_Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public void emitirSom(){
        System.out.println("Emitindo som");
    }

    @Override
    public String toString() {
        return "Ex2_Animal{" +
                "nome='" + nome + '\'' +
                ", idade=" + idade +
                '}';
    }

    public static void main(String[] args) {
        Ex2_Preguica preguica1 = new Ex2_Preguica("Juju", 2);
        preguica1.emitirSom();
    }
}
