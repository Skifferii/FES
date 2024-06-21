import java.io.BufferedInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;

public class Main6 {
    public static void main(String[] args) {
        File file = new File(("c:\\333"));
        System.out.println(file.isFile());
        if (file.isDirectory()){
            String[] list= file.list();
            Arrays.asList(list).forEach(s-> System.out.println(s));
        }
        Path path = Path.of("c://333//1.mp4");


    }



}
