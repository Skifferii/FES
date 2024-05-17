import java.util.Comparator;

public class ComparatorAnzahlDerStückeAufLager implements Comparator<Product> {
    @Override
    public int compare(Product p1, Product p2) {
        return Integer.compare(p1.getAnzahlDerStückeAufLager(), p2.getAnzahlDerStückeAufLager());
    }

}