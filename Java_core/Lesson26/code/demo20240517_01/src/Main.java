import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Person> list =List.of(
                new Person("Ivan","Ivanov",19, "ivan@mail.com"),
                new Person("Sergey","Sergeev",23, "ser@mail.com"),
                new Person("Nikolay","Nikolayev",21, "nik@mail.com"),
                new Person("Boris","Borisoff",28, "bor@mail.com")
        );
        System.out.println(personListHandler(list, new GetNameFunction()));
        System.out.println(personListHandler(list, new GetEmailFunction()));
        System.out.println(list);

    }

    public static List<String> personListHandler (List<Person> list, ToStringFunction func){
        List<String> result = new ArrayList<>();


        for (Person p: list){
            String res = func.apply(p);
            result.add(res);
    }
        return result;
}
}