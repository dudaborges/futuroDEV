import java.util.InputMismatchException;
import java.util.Scanner;

public class Ex4_Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        try{
            System.out.println("Digite um número para ser divido por 100");
            int numero = teclado.nextInt();

            double resultado;
            resultado = numero / 100.0;

            System.out.println("O resultado de 100 / " + numero + " é " + resultado + " \n");
        } catch (ArithmeticException e){
            System.out.println("Ocorreu um erro por digitar um zero, mensagem de erro: " + e);
        } catch (InputMismatchException e){
            System.out.println("Ocorreu um erro por digitar uma letra em uma variável do tipo int: " + e);
        } catch (Exception e){
            System.out.println("Ocorreu um erro: " + e);
        } finally {
            System.out.println("Digite um número novamente");
        }
    }
}
