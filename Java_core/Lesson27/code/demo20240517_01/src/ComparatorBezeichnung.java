import java.util.Comparator;

public class ComparatorBezeichnung implements ComparatorProduct {
    @Override
    public int compare(Product p1, Product p2) {

        return p1.getBezeichnung().compareTo(p2.getBezeichnung());
    }

    @Override
    public String getDescription() {
        return "Сортировка по Bezeichnung:";
    }
}