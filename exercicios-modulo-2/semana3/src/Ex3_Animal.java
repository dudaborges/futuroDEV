public class Ex3_Animal {
    private String nome;
    private int idade;

    public Ex3_Animal(String nome, int idade) {
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

    public static void main(String[] args) {
        Ex3_Cachorro cachorro = new Ex3_Cachorro("jujuba", 3);
        Ex3_Preguica preguica = new Ex3_Preguica("kina", 6);
        Ex3_Cavalo cavalo = new Ex3_Cavalo("gisely", 1);
        Ex3_Veterinario veterinario = new Ex3_Veterinario("Roberto", 30);
        veterinario.examinar(veterinario, cachorro);
        veterinario.examinar(veterinario, preguica);
        veterinario.examinar(veterinario, cavalo);
    }

}
