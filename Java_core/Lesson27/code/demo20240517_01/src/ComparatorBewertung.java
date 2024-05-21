import java.util.Comparator;

public class ComparatorBewertung implements ComparatorProduct {
    @Override
    public int compare(Product p1, Product p2) {

        return Double.compare(p1.getBewertung(), p2.getBewertung());
    }

    @Override
    public String getDescription() {
        return "Сортировка по рейтингу:";
    }
}