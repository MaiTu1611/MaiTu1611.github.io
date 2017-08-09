package ListInterface;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.print.DocFlavor;
public class MapExample {
	public static void main(String[] args) throws ParseException {
		/* PROPERTIES EXAMPLE */
		Properties config = new Properties();
		config.put("width", new Double("1920"));
		config.put("height", new Double("1080"));
		// lấy set-view của tất vả các key bằng phương thức keySet, nếu sử dụng entrySet sẽ trả về các entry trong Map
		// entrySet
		Set st = config.entrySet();
		Iterator it = st.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
		
		//keySet
		Set st2 = config.keySet();
		Iterator it2 = st2.iterator();
		while(it2.hasNext()) {
			System.out.println(it2.next());
		}
	}
}
	