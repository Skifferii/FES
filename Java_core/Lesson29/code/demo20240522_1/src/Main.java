import model.Person;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        Person p1 = new Person("Jack", 20);
        Person p2 = new Person("Lena", 21);

        System.out.println(p1);
        System.out.println(p2);


        Person p3 = p1;
        System.out.println("----------------------");
        p3.setAge(30);
        System.out.println("----------------------");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);


        List<Person> list =new ArrayList<>();
        list.add(p1);
        list.add(p2);
        list.add(p3);


        p1.setAge(50);
        System.out.println(list);
        System.out.println("for p4__________________");

        Person p4= createPerson("P4", 20);

        changePerson(p3);

        System.out.println(list);














        System.out.println("------Main ist endet hier");
    }
    public static Person createPerson(String name, int age){
    return new Person(name, age);
    }


    public static void changePerson (Person p) {
        p.setAge(0);
    }
}