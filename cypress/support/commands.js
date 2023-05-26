import { faker } from "@faker-js/faker";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoverPassword from "../pages/RecoverPassword";

Cypress.Commands.add("login", (email, password) => {
  LeftSideMenuPage.getForms().click();
  LeftSideMenuPage.getLogin().click();
  Login.getEmailAddress().type(email);
  Login.getPassword().type(password);
  Login.getSubmitButton().click();
});

Cypress.Commands.add(
  "register",
  (firstName, lastName, phoneNumber, country, password) => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegister().click();
    Register.getFirstName().type(firstName);
    Register.getFirstName().type(lastName);
    Register.getPhoneNumber().type(phoneNumber);
    Register.getCountry().select(country);
    Register.getEmailAddress().type(
      faker.internet.email({
        firstName: firstName,
        lastName: lastName,
      })
    );
    Register.getPassword().type(password);
    Register.getAgreeCheckbox().click();
    Register.getRegisterButton().click();
  }
);

Cypress.Commands.add("recoverPassword", (email) => {
  LeftSideMenuPage.getForms().click();
  LeftSideMenuPage.getRecoverPassword().click();
  RecoverPassword.getEmailAddress().type(email);
  RecoverPassword.getRecoverPasswordButton().click();
});
