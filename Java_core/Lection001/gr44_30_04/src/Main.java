import java.util.Scanner;  // Import the Scanner class
public class Main {
        public static void main(String[] args) {

            Truck truck1 = new Truck("Actros","Mersedes",14000,2020,450,"Grey","TransAtlantick");
            Truck truck2 = new Truck("A240","Volvo",12000,2021,350,"Black","Joan Jackson");
            truck2.load();
            truck1.fahren();

            System.out.println(truck1.manufacturer+" "+ truck1.model +", owner is: "+ truck1.owner );
            System.out.println(truck2.manufacturer+" "+ truck2.model +", owner is: "+ truck2.owner );







        /* int a=0;
        Person person = new Person();
        person.name = "John";
        person.age = 30;
        person.height = 180;


        Person person1 = new Person();
        person1.name = "Kate";
        person1.age = 25;
        person1.height =170;

        System.out.println(person.name);
        System.out.println(person.age);
        System.out.println(person.height);
        person.canWalk();
        System.out.println("_____________________________");

        Person bill =new Person("Bill", 40,185);
        System.out.println(bill.name);
        System.out.println(bill.age);
        System.out.println(bill.height);
        bill.canWalk();
        System.out.println("_____________________________");

        Person empty =new Person();
        System.out.println(empty.name);
        System.out.println(empty.age);
        System.out.println(empty.height);
        empty.canWalk();
        System.out.println("_____________________________");

        System.out.println("Two parameter constructor");
        System.out.println("_____________________________");
        Person bob =new Person("bob", 19);
        System.out.println("Person Name is: " + bob.name);
        System.out.println("Person Age is: " + bob.age);
        System.out.println("Person height is: " + bob.height);
        bob.canWalk ();
        System.out.println("_________________________________________________________________");
        */





    }
}