public class Ex1_Animal {
    private String nome;
    private int idade;

    public Ex1_Animal(String nome, int idade) {
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

    private void emitirSom(){
        System.out.println("Emitindo som");
    }

    @Override
    public String toString() {
        return "Animal{" +
                "nome='" + nome + '\'' +
                ", idade=" + idade +
                '}';
    }

    public static void main(String[] args) {
        Ex1_Cachorro ex1Cachorro1 = new Ex1_Cachorro("Bibi", 12);
        ex1Cachorro1.setNome("biboca");
        Ex1_Cavalo ex1Cavalo1 = new Ex1_Cavalo("Jully", 2);
        Ex1_Preguica ex1Preguica1 = new Ex1_Preguica("Barney", 3);

        System.out.println(ex1Cachorro1);
        ex1Cachorro1.correr();
        ex1Preguica1.subirArvores();
    }
}
