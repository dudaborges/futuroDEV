public class Ex6_Main {
    public static void main(String[] args) throws Exception, Ex6_MinhaException {
        validaEntrada("");
        validaEntrada("Maria");
    }

//    throws mostra quais as exceções que o método irá trabalhar
    public static void validaEntrada(String entrada) throws Exception, Ex6_MinhaException{
        System.out.println(entrada);

        if ( entrada == null || entrada.equals("") ){
            throw new Exception("Entrada inválida, nulo ou vazio informado !");
        }

        if ( entrada.equals("Nome") ) {
            throw new Ex6_MinhaException("O Texto contém nome Nome");
        }

    }


}
