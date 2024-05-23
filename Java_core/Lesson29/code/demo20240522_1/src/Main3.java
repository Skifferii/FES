import java.util.ArrayList;
import java.util.List;

public class Main3 {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>(
                List.of("Jack", "Ann", "Igor", "Ann", "Tomas", "Bob", "Alexander", "Ann")
        );


        System.out.println(join2(names));
    }


    public static String join(List<String> list) {
        String result = "";
        for (String str : list) {
            result += str;
        }
        return result;
    }

    public static String join2(List<String> list) {
        StringBuilder result = new StringBuilder();
        StringBuffer result2 = new StringBuffer(); // mnogopotochniy
        ;
        int counter = 1;
        for (String str : list) {
            result.append(counter++ + "  " + str + " ").append(str).append(" | ");
        }
        return result.toString();

    }
}
