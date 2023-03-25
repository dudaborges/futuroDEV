import java.util.Scanner;

public class Ex3_JavaParaBaixinhos {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número de patinhos");
        int numPatinhos = scanner.nextInt();
        int initialValue = numPatinhos;

        while (numPatinhos > 0) {
            System.out.println(numPatinhos + " patinhos foram passear\n" + "Além das montanhas\n" + "Para brincar\n");
            numPatinhos = numPatinhos - 1;
            System.out.println("Mas só "+ numPatinhos + " patinhos voltaram de lá.");
        }

        System.out.println("A mamãe patinha foi procurar\n" + "Além das montanhas\n" + "Na beira do mar\n" +
                "A mamãe gritou: Quá, quá, quá, quá\n" + "E os " + initialValue + " patinhos voltaram de lá.\n");
    }
}

