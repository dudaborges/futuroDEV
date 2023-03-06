import java.util.Scanner;

public class Ex2_Attendance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite sua nota 1");
        int nota1 = scanner.nextInt();

        System.out.println("Digite sua nota 2");
        int nota2 = scanner.nextInt();

        System.out.println("Digite sua nota 3");
        int nota3 = scanner.nextInt();

        int media = (nota1 + nota2 + nota3) / 3;

        System.out.println("Sua média é " + media);

        System.out.println("Quantas vezes você faltou este trimestre?");
        int falta = scanner.nextInt();

        System.out.println((media >= 7 && falta <= 4) ? "Você passou. Parabéns!" : "Você reprovou. Estude mais!");
    }
}
