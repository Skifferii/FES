import java.util.ArrayList;
import java.util.List;

public class PersonApp {
    public static void main(String[] args) {

        List <Person> list = List.of(

        new Person(33,"Jack","Jackson"),
        new Person( 22,"John","Jonson"),
        new Person(44,"Jenny","Jenson")
        );

        list = new ArrayList<>(list);

        System.out.println(list);
        System.out.println("_---------_------_-------");
        System.out.println(personListToString(list,32));

    }
    public static String personListToString (List<Person> list) {
        String result = "";
        for (int i = 0; i < list.size() ; i++) {
            result += schortToString ( list.get(i)) + "; " + " age is " + ageOfPersonToString(list.get(i));
        }
        return result;
    }

public static String schortToString  (Person person) {
    return person.getFirst_Name().charAt(0) + "." + person.getLast_Name();
    }

    public static String ageOfPersonToString  (Person person) {
        String result = String.valueOf(person.getAge());

        return result;
    }
    public static String personListToString (List<Person> list, int age) {
        String result = "";
        for (int i = 0; i < list.size() ; i++) {
            if (list.get(i).getAge() > age){
            result += schortToString ( list.get(i))+ " age is " + ageOfPersonToString(list.get(i)) + ";  " ;
        }}
        return result;
    }
}

