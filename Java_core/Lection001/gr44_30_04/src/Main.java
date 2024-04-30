public class Main {
    public static void main(String[] args) {
        int a=0;
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






    }
}