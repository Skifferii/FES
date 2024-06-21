import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Document document1 = new Document("text text text text text text ", "AAA-223" );
        Document document2 = new Document("text text text text text text ", "AAA-223" );
        Student student1 = new Student("Ivan","44");

        print("Nessage #1",document1);
        print("Nessage #2",document2);
        print("Nessage #3",student1);

        List<Printable> printableList = new ArrayList<>();
        printableList.add(document1);
        printableList.add(student1);

        System.out.println("--------------------");
        System.out.println(printableList);
        System.out.println("--------------------");

        printableList.get(1).print("333333");

        Printable student3 = new Student("Jack","2");
        Student student4 = (Student) student3;
        Printable student5 = student4;


        System.out.println("--------------------");

        Note note =new Note("faFEQAF");
        print("4534354",note);


        
    }

    public static void print(String msg, Printable printable){
        printable.print(msg);
    }
}