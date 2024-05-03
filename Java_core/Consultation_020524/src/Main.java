import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] names = new String[]{"Jack", "John", "Nikolaus", "Leo"};
        //String [] names = {"Jack", "John","Nikolaus","Leo"};
        printArray(names);
        System.out.println("_________________");
        String findName = getNameFromScanner ();
        System.out.println("Name" + findName + (isNamePresent(names,findName)? " prisutstvuet" : " otsutstvuet"));
        System.out.println("_________________");
        int index = findIndexOfName(names,findName);
        System.out.println((index>=0 ? "num ist " + index : " otsutstvuet"));
    }

    public static void printArray(String[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

    }

    public static boolean isNamePresent(String[] array, String findName) {
        for (int i = 0; i < array.length; i++) {
            if (array[i].equals(findName)) {
                return true;
            }
        }
        return false;
    }
    public static int findIndexOfName(String[] array, String findName) {
        for (int i = 0; i < array.length; i++) {
            if (array[i].equals(findName)) {
                return i;
            }
        }
        return -1;
    }

    public static String getNameFromScanner (){
        Scanner scanner =new Scanner(System.in);
        System.out.println("imput name");
        String name =scanner.nextLine();
        return name;

    }
}
