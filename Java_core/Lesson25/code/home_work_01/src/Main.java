import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Swimmable> swimmables = new ArrayList<>();
        swimmables.add(new Duck());
        swimmables.add(new Duck());
        swimmables.add(new Boat());
        swimmables.add(new Person());




        for (Swimmable swimmable : swimmables) {
            swimmable.swim();
        }
    }
}