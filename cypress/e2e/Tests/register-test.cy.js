/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import Register from "../../pages/Register";
import LeftSideMenuPage from "../../pages/LeftSideMenuPage";

describe("Register Page Positive and Negative Scenarios", () => {
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomPhoneNumber = faker.phone.number("+48 91 ### ## ##");
  const randomCountry = faker.location.country();
  const randomPassword = faker.internet.password();

  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Register by typing in all information positive test", () => {
    cy.register(
      randomFirstName,
      randomLastName,
      randomPhoneNumber,
      randomCountry,
      randomPassword
    );
    cy.get("#message")
      .should("be.visible")
      .contains(`The account has been successfully created!`);
  });

  it("Register by typing only the required information positive test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegister().click();
    Register.getEmailAddress().type(
      faker.internet.email({
        firstName: randomFirstName,
        lastName: randomLastName,
      })
    );
    Register.getPassword().type(randomPassword);
    Register.getAgreeCheckbox().click();
    Register.getRegisterButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(`The account has been successfully created!`);
  });

  it("Try to register w/o filling required information negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegister().click();
    Register.getFirstName().type(randomFirstName);
    Register.getLastName().type(randomLastName);
    Register.getPhoneNumber().type(randomPhoneNumber);
    Register.getCountry().select(randomCountry);
    Register.getRegisterButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(`Email Address is required`)
      .contains("Password is required")
      .contains(
        "Generic Error - You have to agree with terms before registering"
      );
  });

  it("Try to register w/o filling Email negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegister().click();
    Register.getFirstName().type(randomFirstName);
    Register.getLastName().type(randomLastName);
    Register.getPhoneNumber().type(randomPhoneNumber);
    Register.getCountry().select(randomCountry);
    Register.getPassword().type(randomPassword);
    Register.getAgreeCheckbox().click();
    Register.getRegisterButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(`Email Address is required`);
  });

  it("Try to register w/o filling Password negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegister().click();
    Register.getFirstName().type(randomFirstName);
    Register.getLastName().type(randomLastName);
    Register.getPhoneNumber().type(randomPhoneNumber);
    Register.getCountry().select(randomCountry);
    Register.getEmailAddress().type(
      faker.internet.email({
        firstName: randomFirstName,
        lastName: randomLastName,
      })
    );
    Register.getAgreeCheckbox().click();
    Register.getRegisterButton().click();
    cy.get("#message").should("be.visible").contains("Password is required");
  });

  it("Try to Register by not agreeing with the terms negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegister().click();
    Register.getFirstName().type(randomFirstName);
    Register.getLastName().type(randomLastName);
    Register.getPhoneNumber().type(randomPhoneNumber);
    Register.getCountry().select(randomCountry);
    Register.getEmailAddress().type(
      faker.internet.email({
        firstName: randomFirstName,
        lastName: randomLastName,
      })
    );
    Register.getPassword().type(randomPassword);
    Register.getRegisterButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Generic Error - YOu have to agree with terms before registering`
      );
  });
});
