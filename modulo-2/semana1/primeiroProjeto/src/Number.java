import java.util.Scanner;

public class Number {
    public static void main(String[] args) {
        System.out.println("Digite um número");

        Scanner scanner = new Scanner(System.in);

       int numberOne = scanner.nextInt();

        System.out.println("Digite outro número");

        int numberTwo = scanner.nextInt();

        System.out.println("O número 1 é maior que o número 2?");

        Boolean numberOneBigger = (numberOne > numberTwo);

        System.out.println(numberOneBigger);
    }
}
