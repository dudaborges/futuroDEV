import java.util.Scanner;

public class Nome {
    public static void main(String[] args) {
        System.out.println("Qual o seu nome? ");
//        entrada do usuário no terminal: System.in
        Scanner scanner = new Scanner(System.in);

        String nome;
//       pega a última linha que foi digitada pelo o usuário
        nome = scanner.nextLine();

        System.out.println("Seja bem-vindo(a) " + nome);

        System.out.println("Qual a sua idade?");

        int idade;
        idade = Integer.parseInt(scanner.nextLine());

        System.out.println("Sua idade é " + idade + " anos");

        if(idade >= 18){
            System.out.println("Você é maior de idade!");
        }else{
            System.out.println("Você é menor de idade!");
        }
    }
}
