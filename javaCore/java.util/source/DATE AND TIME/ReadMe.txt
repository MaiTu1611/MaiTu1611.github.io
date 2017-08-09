package ListInterface;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
public class MapExample {
	public static void main(String[] args) throws ParseException {
		// time between two day
		String dateStart = "30/04/2014";
		Date dateEnd = new Date();
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		Date temp = format.parse(dateStart);
		long milisecond = dateEnd.getTime() - temp.getTime();
		System.out.println(temp);
		System.out.println(dateEnd);
		System.out.println(dateEnd.getTime() + "    " + temp.getTime());
		long countDay = milisecond / (24 * 60 * 60 * 1000);// 1000 minisecond = 1s
		System.out.println(countDay);
	}
}
	