import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {





        System.out.println("Hello world!");
    }





    public static List <Person> parsePersons(List<String> list){
        List<Person> result = new ArrayList<>();

        if (list != null && !list.isEmpty()) {
            for (String s: list) {
                Person person = Person.of(s);
                if (person != null) {
                    result.add(person);
                }
           }

        }
        return result;
    }








}