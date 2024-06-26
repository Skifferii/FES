public class Document implements Printable{
private String text;
private String number;

    public Document(String text, String number) {
        this.text = text;
        this.number = number;
    }

    @Override
    public void print(String msg) {
        System.out.println(number);
        if (msg!=null && msg.isBlank()){
            System.out.println(msg);
        }
        System.out.println("*------------------");
        System.out.println(text);
        System.out.println();

    }


    void cancel (){
        System.out.println("Document N: " + number + "ist cancel");
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
