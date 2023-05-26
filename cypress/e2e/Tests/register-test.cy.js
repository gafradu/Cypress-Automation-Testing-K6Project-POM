/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import MainPage from "../../pages/MainPage";
import MyAccountPage from "../../pages/MyAccountPage";
import GeneralMethods from "../../pages/GeneralMethods";

describe("Register Positive and Negative Scenarios", () => {
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();

  const Username = GeneralMethods.generateUsername(
    randomFirstName,
    randomLastName
  );
  const EmailAdress = GeneralMethods.generateEmailAddress(Username);

  beforeEach(() => {
    cy.visit("http://ecommerce.test.k6.io/");
  });

  it("Register successfully with a new user positive test", () => {
    MainPage.getMyAccountPage().click();
    MyAccountPage.getRegisterEmail().type(EmailAdress);
    MyAccountPage.getRegisterButton().click();
    cy.contains(`Hello ${Username} (not ${Username}? Log out)`).should(
      "be.visible"
    );
    cy.contains(
      `From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.`
    ).should("be.visible");
  });

  it("Try to register using existing email negative test", () => {
    MainPage.getMyAccountPage().click();
    MyAccountPage.getRegisterEmail().type(EmailAdress);
    MyAccountPage.getRegisterButton().click();
    cy.get(".woocommerce-error")
      .contains(
        "Error: An account is already registered with your email address. Please log in."
      )
      .should("be.visible");
  });
});
