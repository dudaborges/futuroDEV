import java.util.Objects;
import java.util.Scanner;

public class Ex4_User {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Username: ");
        String username;
        username = scanner.nextLine();

        System.out.println("Password: ");
        String password;
        password = scanner.nextLine();

        while (Objects.equals(username, password)){
            System.out.println("[ERROR]Type the password again");
            password = scanner.nextLine();
        }

        System.out.println("Registered user!");
    }
}
