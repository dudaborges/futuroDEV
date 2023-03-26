public class Professor extends Usuario {
    private int id;
    private String turmas;
    private double salario;

    public Professor(String nome, String email, String senha, int id, String turmas, double salario) {
        super(nome, email, senha);
        this.id = id;
        this.turmas = turmas;
        this.salario = salario;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTurmas() {
        return turmas;
    }

    public void setTurmas(String turmas) {
        this.turmas = turmas;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Professor{" +
                "id=" + id +
                ", turmas='" + turmas + '\'' +
                ", salario=" + salario +
                '}';
    }
}
