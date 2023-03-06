import java.util.Scanner;

public class Ex3_Class {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Hello! What's your name?");
        String name;
        name = scanner.nextLine();
        System.out.println("Welcome " + name + "!");

        System.out.println("What's your age, " + name + "?");
        int idade;
        idade = scanner.nextInt();

        if(idade < 7){
            System.out.println("Go to daycare!");
        }else if(idade < 8){
            System.out.println("You are in the 7 year old class");
        }else if(idade < 9){
            System.out.println("You are in the 8 year old class");
        }else if(idade < 10){
            System.out.println("You are in the 9 year old class");
        }else if(idade < 11){
            System.out.println("You are in the 10 year old class");
        }else if(idade< 12){
            System.out.println("You are in the 11 year old class");
        }else if(idade < 13){
            System.out.println("You are in the 12 year old class");
        }else if(idade < 14){
            System.out.println("You are in the 13 year old class");
        }else{
            System.out.println("You are in the over 14 class");
        }
    }
}
