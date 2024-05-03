public class Truck {

        public String model;
        public String manufacturer;
        public int grus;
        public int baujahr;
        public int vGasTank;
        public String color;
        public String owner;


        public Truck (String model, String manufacturer, int grus, int baujahr, int vGasTank,String color,String owner){
            this.model = model;
            this.manufacturer = manufacturer;
            this.grus = grus;
            this.baujahr = baujahr;
            this.vGasTank = vGasTank;
            this.color = color;
            this.owner = owner;
        }

    public void load(){
            System.out.println("_____________________________");
            System.out.println(manufacturer +" "+ model + " kann Load");
            System.out.println("_____________________________");
        }

    public void fahren(){
        System.out.println("_____________________________");
        System.out.println(manufacturer +" "+ model + " kann fahren");
        System.out.println("_____________________________");
    }

    wrrsadwwrrswwrrdddddddddddddddddddddddddddddddddddddddddrrrw


}

/* Cоздать класс грузовик Truck, содержащий общие характеристики грузовиков:
model, manufacturer, грузоподъемность, год выпуска, объем топливного бака, цвет,
имя владельца

и имеющий следующее поведение:

1. должен уметь загружаться(load)  и при этом сообщать, если превышена его грузоподъемность
  а также сообщать сколько еще можно загрузить груза
2. разгружаться и при этом сообщать в случае попытки разгрузить больше чем имеющийся у него
    на борту груз или попытки разгрузить отрицательный груз
3. В случае остутствия топлива или отсутствия груза на борту сообщать о невозможности ехать
4. Должен уметь ездить и останавливаться
5. уметь заправляться топливом
6. уметь сообщать имя владельца

Создать несколько грузовиков, протестировать их работу, сложить их в массив и вывести
на экран */