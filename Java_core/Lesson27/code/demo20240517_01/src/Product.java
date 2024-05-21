public class Product {
    private String bezeichnung;
    private String titelRus;
    private double preis;
    private double bewertung;
    private int anzahlDerStückeAufLager;



    public Product(String bezeichnung,String titelRus, double preis, double bewertung, int anzahlDerStückeAufLager) {
        this.bezeichnung = bezeichnung;
        this.titelRus = titelRus;
        this.preis = preis;
        this.bewertung = bewertung;
        this.anzahlDerStückeAufLager = anzahlDerStückeAufLager;
    }

    public String getBezeichnung() {return bezeichnung;}

    public String getTitelRus() {return titelRus;}

    public double getPreis() {
        return preis;
    }

    public double getBewertung() {
        return bewertung;
    }

    public int getAnzahlDerStückeAufLager() {
        return anzahlDerStückeAufLager;
    }



    @Override
    public String toString() {
        String  str = String.format("Tovar: %16s (%16s) [%9.2f] reyting: %.1f kolichestvo: %3d",bezeichnung,titelRus,preis,bewertung,anzahlDerStückeAufLager);
        return str;

         // return "Product "+"bezeichnung: " + bezeichnung +",  preis " + preis +" €,   bewertung _" + bewertung +"_,   anzahlDerStückeAufLager :" + anzahlDerStückeAufLager ;
    }
}