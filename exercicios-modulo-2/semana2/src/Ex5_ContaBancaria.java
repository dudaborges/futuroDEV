public class Ex5_ContaBancaria {
    private int numeroDaConta;
    private double saldo;

    public Ex5_ContaBancaria(int numeroDaConta, double saldo) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }

    public int getNumeroDaConta() {
        return numeroDaConta;
    }

    public void setNumeroDaConta(int numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public void depositar(double valorDeposito){
        saldo += valorDeposito;
        System.out.println("Valor depoisitado: " + valorDeposito + "\n" + "Valor disponível: " + saldo);
    }

    public void sacar(double valorSaque){
        if(valorSaque <= saldo){
            numeroDaConta -= valorSaque;
            System.out.println("Valor do saque: " + valorSaque + "\n" + "Valor disponível: " + saldo);
        }else{
            System.out.println("Saldo insuficiente");
        }
    }

    public void verSaldo(){
        System.out.println("Saldo disponível: " + getSaldo());
    }

    public static void main(String[] args) {
        Ex5_ContaBancaria conta1 = new Ex5_ContaBancaria(79856321, 5098.97);

//        conta1.verSaldo();
//        conta1.depositar(50);
        conta1.sacar(200);
    }

}
