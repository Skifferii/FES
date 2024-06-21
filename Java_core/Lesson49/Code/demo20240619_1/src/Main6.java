import java.io.*;

import java.net.URL;

public class Main5 {
    public static void main(String[] args) throws IOException {

        URL url  = new URL("https://www.ait-tr.de/");
        try (InputStream inputStream= new BufferedInputStream(url.openStream());) {
            int data;
            while ((data = inputStream.read()) != -1) {

                    System.out.printf("%c", data);

            }
        }

    }

}
