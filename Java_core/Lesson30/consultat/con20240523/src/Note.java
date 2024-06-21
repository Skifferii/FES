public class Note implements AutoPrintable{
    private String text;

    public Note(String text) {
        this.text = text;
    }


    @Override
    public void print() {
        System.out.println("NOTE");
    }
}
