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
		
		// CALENDAR EXAMPLE
		String month[] = {
			      "Jan", "Feb", "Mar", "Apr",
			      "May", "Jun", "Jul", "Aug",
			      "Sep", "Oct", "Nov", "Dec"};
		GregorianCalendar gC = new GregorianCalendar();
		System.out.print("Date before setTime: " + gC.get(Calendar.DATE) + " ");
		System.out.print(month[gC.get(Calendar.MONTH)] + " ");
		System.out.println(gC.get(Calendar.YEAR));
		gC.setTime(temp);
		System.out.print("Date after setTime: " + gC.get(Calendar.DATE) + " ");
		System.out.print(month[gC.get(Calendar.MONTH)] + " ");
		System.out.println(gC.get(Calendar.YEAR));
		gC.set(2018, 1, 1);// month begin 0
		System.out.print("Date after setTime 2018/2/1: " + gC.get(Calendar.DATE) + " ");
		System.out.print(month[gC.get(Calendar.MONTH)] + " ");
		System.out.println(gC.get(Calendar.YEAR));
		System.out.println(gC.toString());
		// Test Leap Year
		int year = gC.get(Calendar.YEAR);
		if(gC.isLeapYear(year)) {
			System.out.println(year + " là năm nhuận");
		}
		else {
			System.out.println(year + " là năm không nhuận");
		}
		
	}
}
	