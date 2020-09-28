package runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"D:\\Eclipse\\GroupActivity\\src\\main\\resources\\FundTransfer.feature"},
		glue="stepdef",
	    plugin = {"pretty","html:target/cucumber-reports"}
		)	

public class RunnerClassFT {

}
