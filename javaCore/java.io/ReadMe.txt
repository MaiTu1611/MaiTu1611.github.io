package ListInterface;
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
public class MapExample {
	public static void main(String[] args) throws IOException {
		FileInputStream is = null;
		FileOutputStream os = null;
		BufferedInputStream bis = null;
		PrintWriter  bos = null;
		//BufferedOutputStream  bos = null;
		File fl = new File("C:\\Users\\PC\\workspace\\Test_java.util\\src\\ListInterface\\test.txt");
		try {
			 is = new FileInputStream(fl);
			 os = new FileOutputStream("C:\\Users\\PC\\workspace\\Test_java.util\\src\\ListInterface\\output.txt");
			int temp;
			long diff = System.currentTimeMillis();
			while((temp = is.read()) != -1) {
				os.write(temp);
			}
			long diff2 = System.currentTimeMillis();
			System.out.println(diff2 - diff);
		}
		finally {
			if(is != null) {
				is.close();
			}
			if(os != null) {
				os.close();
			}
		}
		 bis = new BufferedInputStream(new FileInputStream(fl));
		 bos = new PrintWriter(new FileOutputStream("C:\\Users\\PC\\workspace\\Test_java.util\\src\\ListInterface\\output2.txt"), true);
		int temp2;
		long diff = System.currentTimeMillis();
		while((temp2 = bis.read()) != -1) {
			bos.write(temp2);
		}
		//bos.flush();
		bos.close();
		bis.close();
		long diff2 = System.currentTimeMillis();
		System.out.println(diff2 - diff);
	}
}
	