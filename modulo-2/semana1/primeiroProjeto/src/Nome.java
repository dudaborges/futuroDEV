import java.util.Scanner;

public class Nome {
    public static void main(String[] args) {
        System.out.println("Qual o seu nome? ");
//        entrada do usuário no terminal: System.in
        Scanner scanner = new Scanner(System.in);

        String nome;
//       pega a última linha que foi digitada pelo o usuário
        nome = scanner.nextLine();

        System.out.println("O nome digitado é " + nome);
    }
}
