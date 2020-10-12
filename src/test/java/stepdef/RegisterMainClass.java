package stepdef;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterMainClass extends RegisterBaseClass {
	static WebDriver obj;

	
	@Given("user is on rapid test page")
	public static void url() throws Exception
	{
		RegisterBaseClass.Browser();
	}
	@When("user enter details")
	public static void product() throws Exception	
	{
	 System.out.println("You are in product method");
	 Fname();
	 Lname();
	Password();
	Cn_Password();
	Email_ID();
	Phone_Number();
	DOB();
	gender();
	Address();
	City_name();
	State();
	Zip();
	AccTyp();
	Pin();
	Cnfrm_Pin();
		
	}
	@Then("user clicks submit and logout") 
	public void select() throws Exception {
		RegisterBaseClass.Submit();
			}
	
	
	

}
