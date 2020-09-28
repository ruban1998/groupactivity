$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Eclipse/GroupActivity/src/main/resources/FundTransfer.feature");
formatter.feature({
  "name": "FundTransfer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User login into page and do fund transfer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user login into the Demo bank page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferMainClass.chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login using valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferMainClass.Clicks_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click FundTransfer",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferMainClass.Clicks_FT()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills the fund transfer form",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferMainClass.FT_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter transcation authorisation code",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferMainClass.Auth_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "after successfull transcation user logouts",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferMainClass.Logout()"
});
formatter.result({
  "status": "passed"
});
});