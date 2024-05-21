import java.util.List;
import java.util.Collections;
import java.util.Comparator;

public class ListTasks {

    // Метод для объединения всех строк в одну
    public static String concatenateStrings(List<String> strings) {
        StringBuilder result = new StringBuilder();
        for (String s : strings) {
            result.append(s);
        }
        return result.toString();
    }

    // Метод для объединения строк по убыванию их длины
    public static String concatenateStringsByLength(List<String> strings) {
        strings.sort(Comparator.comparingInt(String::length).reversed());
        StringBuilder result = new StringBuilder();
        for (String s : strings) {
            result.append(s);
        }
        return result.toString();
    }

    // Метод для замены повторяющихся слов
    public static List<String> replaceDuplicates(List<String> strings, String word) {
        boolean firstOccurrence = true;
        for (int i = 0; i < strings.size(); i++) {
            if (strings.get(i).equalsIgnoreCase(word)) {
                if (firstOccurrence) {
                    firstOccurrence = false;
                } else {
                    strings.set(i, "[Повтор] " + word);
                }
            }
        }
        return strings;
    }
}