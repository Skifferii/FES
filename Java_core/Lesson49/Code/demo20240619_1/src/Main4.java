import java.io.*;

public class Main4 {
    public static void main(String[] args){
        copy();

    }
    public static void copy () {
        try (InputStream is = new BufferedInputStream(new FileInputStream("c:/333/1.mp4"));
             // https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso?_ga=2.248671879.1067583756.1718820461-996624562.1718820461
            OutputStream os= new BufferedOutputStream(new FileOutputStream("c:/333/1copy.mp4"))){
            int count=0;
            int data;
            while ((data= is.read())!=-1){
                count++;
                if (count% 10000000==0){
                    System.out.println(count);
                }
                os.write(data);
            }
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}
