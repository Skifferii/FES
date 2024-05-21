import java.util.Comparator;

public class ComparatorAnzahlDerStückeAufLager implements ComparatorProduct {
    @Override
    public int compare(Product p1, Product p2) {
        return Integer.compare(p1.getAnzahlDerStückeAufLager(), p2.getAnzahlDerStückeAufLager());
    }

    @Override
    public String getDescription() {
        return "NA LAGE";
    }
}