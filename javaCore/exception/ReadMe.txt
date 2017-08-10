package ListInterface;
import java.io.*;
public class MapExample {
	private static ObjectInputStream ois;

	public static void main(String[] args) throws ClassNotFoundException, IOException {
		student sd = new student(14521034,"Mai Van Tu");
		Employee e = new Employee(4987, "Nguyen Chi Cong", "Truong Phong");
		File file = new File("C:\\Users\\PC\\Desktop\\testFileNotFound.txt");
		if(!file.exists()) {
			file.createNewFile();
		}
		ObjectOutputStream Oos = null;
		try {
			Oos = new ObjectOutputStream(new FileOutputStream(file));
		} catch (FileNotFoundException e2) {
			// TODO Auto-generated catch block
			e2.getMessage();
		} catch (IOException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		Oos.writeObject(sd);
		Oos.writeObject(e);
		Oos.close();
		
		ois = new ObjectInputStream(new FileInputStream(file));
		student sd1 = (student) ois.readObject();
		System.out.println(sd1.getId() + " " + sd1.getName());
		Employee e1 = (Employee) ois.readObject();
		System.out.println(e1.getId() + " " + e1.getName() + " " + e1.getRegency());
	}
}
	