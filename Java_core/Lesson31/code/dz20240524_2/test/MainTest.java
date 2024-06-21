import org.junit.jupiter.api.Assertions;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {





    @org.junit.jupiter.api.Test

    void selectEmployeeBonus() {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee("John", 2020));
        list.add(new Employee("Anna", 2016));
        list.add(new Employee("Jack", 1999));
        list.add(new Employee("Mark", 1995));
        list.add(new Employee("Mark", 1997));
        list.add(new Employee("Oleg", 2000));
        list.add(new Employee("Valerii", 2005));

        List<Employee> expectedList = new ArrayList<>();

        expectedList.add(new Employee("Mark", 1995));
        expectedList.add(new Employee("Mark", 1997));
        expectedList.add(new Employee("Jack", 1999));


        List<Employee> result = Main.selectEmployeeBonus(list, 3);

        Assertions.assertEquals(expectedList, result);

    }
}