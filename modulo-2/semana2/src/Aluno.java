public class Aluno {

    private Long matricula;
    private String nome;
    private String turma;
    private Boolean estudou;

    public Aluno(Long matricula, String nome, String turma) {
        this.matricula = matricula;
        this.nome = nome;
        this.turma = turma;
        this.estudou = false;
    }

    public Long getMatricula() {
        return matricula;
    }

    public void setMatricula(Long matricula) {
        this.matricula = matricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

    public Boolean getEstudou() {
        return estudou;
    }

    public void setEstudou(Boolean estudou) {
        this.estudou = estudou;
    }

    public void setEstudou(int minutos){
        this.estudou = minutos < 60;
    }


    @Override
    public String toString() {
        return "Aluno{" +
                "matricula=" + matricula +
                ", nome='" + nome + '\'' +
                ", turma='" + turma + '\'' +
                ", estudou=" + estudou +
                '}';
    }
}
