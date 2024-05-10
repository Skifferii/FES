import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add (new Manager("Mikhalich", 5000, 2000));
        employees.add (new QAEngineer("John", 8000));
        employees.add (new QAEngineer("Eduard", 3000));
        employees.add (new Programmer("Jack", 6500));
        employees.add (new Programmer("Boris", 3000));
        System.out.println("_____________________");
        System.out.println((employees));

        System.out.println("_____________________");
        for (int i = 0; i < employees.size(); i++) {
            System.out.println("-----"+ employees.get(i).getName());
            employees.get(i).salary();
        };System.out.println("_____________________");
        Manager manager1= new Manager("manager1", 11000, 1000);
        Employee manager2= new Manager ("manager2", 22220, 2000);

        manager1.work();
        manager2.work();
    }
}