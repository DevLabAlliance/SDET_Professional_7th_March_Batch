$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Authentication",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "org.devlab.stepdef.CommonStepDef.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter username \"validuser\" on login page",
  "keyword": "When "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_enter_username_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"password\" on login page",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_enter_password_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Submit button on login page",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_click_on_Submit_button_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on authenticated home page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_should_land_on_authenticated_home_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Failed to land on home page\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.devlab.stepdef.LoginStepDef.i_should_land_on_authenticated_home_page(LoginStepDef.java:33)\r\n\tat ✽.I should land on authenticated home page(file:///C:/Users/Ravi/git/SDET_Professional_7th_March_Batch1/src/test/resources/features/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Screen shot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "org.devlab.stepdef.CommonStepDef.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter username \"invaliduser\" on login page",
  "keyword": "When "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_enter_username_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"password\" on login page",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_enter_password_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Submit button on login page",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_click_on_Submit_button_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not land on authenticated home page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.devlab.stepdef.LoginStepDef.i_should_not_land_on_authenticated_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Screen shot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Registration.feature");
formatter.feature({
  "name": "User registration",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "org.devlab.stepdef.CommonStepDef.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"REGISTER\" link",
  "keyword": "When "
});
formatter.match({
  "location": "org.devlab.stepdef.CommonStepDef.i_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user registration with valid user details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter \"rahul\" into firstname text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_firstname_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"tripathi\" into lastname text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_lastname_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"autouser\" into username text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_username_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test\" into password testbox",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_password_testbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test\" into confirm password text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_confirm_password_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on registration confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_should_land_on_registration_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Screen shot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "org.devlab.stepdef.CommonStepDef.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"REGISTER\" link",
  "keyword": "When "
});
formatter.match({
  "location": "org.devlab.stepdef.CommonStepDef.i_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user registration with invalid user details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter \"invalidauser\" into firstname text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_firstname_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"tripathi\" into lastname text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_lastname_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"autouser\" into username text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_username_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test\" into password testbox",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_password_testbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test234\" into confirm password text box",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_enter_into_confirm_password_text_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not land on registration confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.devlab.stepdef.RegistrationStepDef.i_should_not_land_on_registration_confirmation_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat org.devlab.stepdef.RegistrationStepDef.i_should_not_land_on_registration_confirmation_page(RegistrationStepDef.java:49)\r\n\tat ✽.I should not land on registration confirmation page(file:///C:/Users/Ravi/git/SDET_Professional_7th_March_Batch1/src/test/resources/features/Registration.feature:23)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", "Screen shot");
formatter.after({
  "status": "passed"
});
});