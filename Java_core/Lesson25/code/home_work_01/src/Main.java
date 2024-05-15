import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Создаем список объектов, которые могут плавать
        List<Swimmable> swimmables = new ArrayList<>();
        swimmables.add(new Duck());
        swimmables.add(new Duck());
        swimmables.add(new Boat());
        swimmables.add(new Person());



        // Заставляем все объекты в списке плыть
        for (Swimmable swimmable : swimmables) {
            swimmable.swim();
        }
    }
}