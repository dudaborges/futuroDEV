package Entidades;

public class Produto {

    public double preco; // todas as classes podem acessar esses atributos
    protected double tamanho; // somente as classes filhas ou que estejam no mesmo pacote podem acessar esses atributos
    double peso; // (default) todas as classes do mesmo pacote(packpage) podem acessar esses atributos
    private String marca; //nenhuma outra classe pode acessar esses atributos


    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public double getTamanho() {
        return tamanho;
    }

    public void setTamanho(double tamanho) {
        this.tamanho = tamanho;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

}
