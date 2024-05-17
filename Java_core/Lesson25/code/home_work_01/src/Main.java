import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        Swimmable [] swimmables = {
            new Duck(),
            new Duck(),
            new Boat(),
            new Person()
                    };

        for (Swimmable swimmable : swimmables) {
            swimmable.swim();
        }
    }

}