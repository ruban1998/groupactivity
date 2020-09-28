$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Eclipse/GroupActivity/src/main/resources/LoginPage.feature");
formatter.feature({
  "name": "Verifying demo bank details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying login details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on rapid test page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterMainClass.url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter details",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterMainClass.product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks submit and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterMainClass.select()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdef.RegisterMainClass.select(RegisterMainClass.java:42)\r\n\tat ✽.user clicks submit and logout(D:/Eclipse/GroupActivity/src/main/resources/LoginPage.feature:6)\r\n",
  "status": "failed"
});
});