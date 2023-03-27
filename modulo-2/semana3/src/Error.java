import java.util.InputMismatchException;
import java.util.Scanner;

public class Error {
    public static void main(String[] args) {

//          erros específicos precisam estar antes de erros genéricos
//        quando colocamos um bloco de código dentro do try, significa que "desconfiamos" que pode dar algum erro
        try{
            Scanner scanner = new Scanner(System.in);
            System.out.printf("Digite um número para multiplicar por 10: ");
            int num = scanner.nextInt();

//        %d é a variável, só pode ser usada no sout com f
            System.out.printf("O resultado de %d x 10 é: %d", num, num * 10);
        } catch (InputMismatchException e){
            System.out.println("Digite um número inteiro") ;
        } catch (Exception e){
            System.out.println("Ocorreu um erro: " + e) ;
        } finally {
            System.out.println("Encerrando programa");
            int num = 0;
        }
    }
}
