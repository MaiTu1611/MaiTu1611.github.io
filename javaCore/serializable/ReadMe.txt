package ListInterface;
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
public class MapExample {
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		student sd = new student(14521034,"MaiVanTu");
		Employee e = new Employee(4987, "Nguyen Chi Cong", "Truong Phong");
		File file = new File("testSerializable.txt");
		if(!file.exists()) {
			file.createNewFile();
		}
		ObjectOutputStream Oos = new ObjectOutputStream(new FileOutputStream(file));
		Oos.writeObject(sd);
		Oos.writeObject(e);
		Oos.close();
		
		ObjectInputStream Ois = new ObjectInputStream(new FileInputStream(file));
		student sd1 = (student) Ois.readObject();
		System.out.println(sd1.getId() + " " + sd1.getName());
		Employee e1 = (Employee) Ois.readObject();
		System.out.println(e1.getId() + " " + e1.getName() + " " + e1.getRegency());
	}
}
	