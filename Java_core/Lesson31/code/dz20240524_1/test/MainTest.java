import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {


    @Test
    void parsePersons() {
        List<String> data = List.of("John,18", "Jack,32", "Anna,21", "Olga,25", "Gektar,21");
        List<Person> expectedResult = List.of(
                new Person("John", 18),
                new Person("Jack", 32),
                new Person("Anna", 21),
                new Person("Olga", 25),
                new Person("Gektar", 21)
        );

        List<Person> actualResult = Main.parsePersons(data);

        Assertions.assertEquals(expectedResult, actualResult);

    }


    @Test
    @DisplayName("input empty list")
    void testParsePersons() {
        //List<String> data =  Collections.emptyList();

        List<String> data = new ArrayList<>();

        List<Person> expectedResult = List.of();

        List<Person> actualResult = Main.parsePersons(data);

        Assertions.assertEquals(expectedResult, actualResult);
    }



    @Test
    @DisplayName("input empty null")
    void parsePersons_List_Null() {
        //List<String> data =  Collections.emptyList();
        List<String> data = null;

        List<Person> expectedResult = List.of();

        List<Person> actualResult = Main.parsePersons(data);

        Assertions.assertEquals(expectedResult, actualResult);
    }

    @Test
    @DisplayName("If_list With Null And Empty Values")
    void parsePersons_If_listWithNullAndEmptyValues() {
        List<String> data = new ArrayList<>(List.of("John,18", "", "Jack,32", "Anna,21", "Olga,25", "Jack32", "Gektar,21"));
        data.add(null);
        List<Person> expectedResult = List.of(
                new Person("John", 18),
                new Person("Jack", 32),
                new Person("Anna", 21),
                new Person("Olga", 25),
                new Person("Gektar", 21)
        );

        List<Person> actualResult = Main.parsePersons(data);

        Assertions.assertEquals(expectedResult, actualResult);

    }
}