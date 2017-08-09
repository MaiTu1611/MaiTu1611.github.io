package ListInterface;
import java.text.ParseException;
import java.util.*;
public class LanguagesController {
	private final Map<String, Locale> supportedLanguages;
    private final ResourceBundle translation;
 
    public LanguagesController(String language) {
        supportedLanguages = new HashMap<String, Locale>();
        supportedLanguages.put("English", Locale.ENGLISH);
        supportedLanguages.put("Vietnamese", new Locale("vi", "VN"));
        translation = ResourceBundle.getBundle("language", (Locale) supportedLanguages.get(language));
    }
 
    public String getWord(String keyword) {
        return translation.getString(keyword);
    }
 
    public static String getText(String key) {
        String result = "";
        if ("en".equals(System.getProperty("user.language"))) {
            LanguagesController langController_en = new LanguagesController("English");
            result = langController_en.getWord(key);
        }
        if ("vi".equals(System.getProperty("user.language"))) {
            LanguagesController langController_vi = new LanguagesController("Vietnamese");
            result = langController_vi.getWord(key);
        }
        return result;
    }
	public static void main(String[] args) throws ParseException {
		 System.out.println(LanguagesController.getText("language"));
		}
	}
	