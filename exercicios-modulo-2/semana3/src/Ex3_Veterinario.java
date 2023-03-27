public class Ex3_Veterinario extends Ex3_Animal{

    public Ex3_Veterinario(String nome, int idade) {
        super(nome, idade);
    }

    public void emitirSom(){
        System.out.println("*Animal emitindo som*");
    }

    public void examinar(Ex3_Veterinario veterinario, Ex3_Animal animal){
        System.out.println("Examinal o animal " + animal.getNome());
    }

}
