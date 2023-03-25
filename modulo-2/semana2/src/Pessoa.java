public class Pessoa {

    private String nome;
    private String sobrenome;
    private Boolean maiorDeIdade;

    public Pessoa(){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Boolean getMaiorDeIdade() {
        return maiorDeIdade;
    }

    public void setMaiorDeIdade(Boolean maiorDeIdade) {
        this.maiorDeIdade = maiorDeIdade;
    }

    public void setMaiorDeIdade(int idade){
        this.maiorDeIdade = idade >= 18;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", maiorDeIdade=" + maiorDeIdade +
                '}';
    }
}
