public class Aluno extends Usuario {
    private int id;
    private String turma;
    private double media;


    public Aluno(String nome, String email, String senha, int id, String turma, double media) {
        super(nome, email, senha);
        this.id = id;
        this.turma = turma;
        this.media = media;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

    public double getMedia() {
        return media;
    }

    public void setMedia(double media) {
        this.media = media;
    }

    @Override
    public String toString() {
        return "Aluno{" +
                "id=" + id +
                ", turma='" + turma + '\'' +
                ", media=" + media +
                '}';
    }
}
