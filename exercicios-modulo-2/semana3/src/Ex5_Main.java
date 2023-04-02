import java.io.*;
public class Ex5_Main {
    public static void main(String[] args) {
        File arquivo = null;

        try{
            BufferedReader leitor = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Digite o nome do arquivo que deseja criar: ");
            String nomeArquivo = leitor.readLine();
            arquivo  = new File(nomeArquivo);
            FileWriter escritor = new FileWriter(nomeArquivo, true);
            PrintWriter gravador = new PrintWriter(escritor);
            gravador.println("Este é o texto que irei salvar dentro do arquivo");
            gravador.close();
        } catch (IOException e) {
            System.out.println("Ocorreu um erro: " + e.getMessage());
        } finally {
            System.out.println("Encerrando o programa");
            arquivo = null;
        }
    }
}
