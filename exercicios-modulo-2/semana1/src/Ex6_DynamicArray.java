import java.util.*;

public class Ex6_DynamicArray {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Maria");
        names.add("João");
        names.add("Pedro");

        System.out.println("First position of dynamic ArrayList: " + names.get(0));
        System.out.println("\n");

        System.out.println("Dynamic ArrayList with a repeating For loop:\n");
        for (int i = 0; i < names.size(); i++){
            System.out.println(names.get(i));
        }
        System.out.println("\n");

        Collections.sort(names);
        System.out.println("Names in alphabetical order:\n");
        for (String name: names){
            System.out.println(name);
        }
        System.out.println("\n");

        names.remove(0);
        System.out.println("The dynamic ArrayList with a repeating For Each loop after deleting the first index value:\n");
        for (String name: names){
            System.out.println(name);
        }
        System.out.println("\n");

        System.out.println("The last value of the ArraList is: " + (names.size() - 1) + " " + names.get(1));
        System.out.println("\n");

        names.clear();
        System.out.println("The ArrayList will now be reset...\n");

        System.out.println("The size of the ArrayList is: " + names.size());
        System.out.println("\n");

        System.out.println("Closing program");
    }
}
