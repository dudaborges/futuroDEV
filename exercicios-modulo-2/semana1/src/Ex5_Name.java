
public class Ex5_Name {
    public static void main(String[] args) {

        String[] names = new String[5];
        names[0] = "Maria";
        names[1] = "João";
        names[2] = "José";
        names[3] = "Eduarda";
        names[4] = "Pedro";

        System.out.println("The first position is: " + names[0]);
        System.out.println("The list is:");
        for (int i = 0; i < names.length; i++){
            System.out.println(names[i]);
        }
    }
}
