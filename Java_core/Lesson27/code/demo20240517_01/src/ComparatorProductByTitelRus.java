import java.util.Comparator;

public class ComparatorProductByTitelRus implements ComparatorProduct {
    @Override
    public int compare(Product p1, Product p2) {

        return p1.getTitelRus().compareTo(p2.getTitelRus());
    }

    @Override
    public String getDescription() {
        return "Po RUS titel";
    }
}