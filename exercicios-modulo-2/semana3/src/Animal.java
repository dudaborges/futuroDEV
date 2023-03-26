public class Animal {
    private String nome;
    private int idade;

    public Animal(String nome, int idade) {
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
        Cachorro cachorro1 = new Cachorro("Bibi", 12);
        Cavalo cavalo1 = new Cavalo("Jully", 2);
        Preguica preguica1 = new Preguica("Barney", 3);

        System.out.println(cachorro1);
        cachorro1.correr();
        preguica1.subirArvores();
    }
}
