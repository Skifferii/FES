import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("____________");
        List<String> list = new ArrayList<>();

        List<Integer> listInt = new ArrayList<>();
        List<Double> listDouble = new ArrayList<>();

        Integer iObject = 10;


        listInt.add (100);
        listInt.add (101);
        listInt.add (102);
        listInt.add (103);

        System.out.println(listInt);
        for (int i =0; i<listInt.size();i++) {
            System.out.println(listInt.get(i).doubleValue());
        }
        System.out.println("____________");

        int i = Integer.parseInt("555");

    }
}