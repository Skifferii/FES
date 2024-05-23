public class Main2 {
    public static void main(String[] args) {
        int a=1;
        int b;

        b=a;
        System.out.println("------------------------");
        System.out.println("a="+a+" b=" +b);
        b=2;
        System.out.println("---------B=2---------");
        System.out.println("a="+a+" b=" +b);
        System.out.println("------------------------");

        String s1="java";
        String s2="hello";

        System.out.println(s1);
        System.out.println(s2);

        String s3=s1;
        System.out.println("-------------String s3=s1;-----------");
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);

        s3= "kotlin";

        System.out.println("-------------s3= \"kotlin\"-----------");
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println("------------------------");
        String str1 = "java";
        String str2 = "java";
        String str3 = new String("java");

        System.out.println(str1==str2);
        System.out.println(str1==str3);
        System.out.println(str1.equals(str2));
        System.out.println(str1.equals(str3));


        str2 ="kotlin";
        String str5 ="kotlin";
        str5 = "KOTLIN";

        System.out.println(str5);
        System.out.println("------------------------");

        str5= str5.toLowerCase();

        System.out.println("------------------------");
        System.out.println(str1);
        System.out.println(str2);
        System.out.println(str5);
        System.out.println(str5==str2);
        System.out.println(str5.equals(str2));





    }
}
