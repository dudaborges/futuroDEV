import java.util.ArrayList;

public class Ex6_Calculadora {
    public void soma(int n1, int n2){
        int somar = n1 + n2;
        System.out.println("O resultado da soma deu: " + somar);
    }

    public void soma(int n1, int n2, int n3){
        int somar = n1 + n2 + n3;
        System.out.println("O resultado da soma deu: " + somar);
    }

    public void soma(int[] num){
        int somar = 0;

        for(int n : num){
            somar += n;
        }
        System.out.println("O resultado da soma deu: " + somar);
    }

    public static void main(String[] args) {
        Ex6_Calculadora calculo1 = new Ex6_Calculadora();

        calculo1.soma(4, 5, 10);

        int[] num = {2, 4, 6};
        calculo1.soma(num);

    }
}

