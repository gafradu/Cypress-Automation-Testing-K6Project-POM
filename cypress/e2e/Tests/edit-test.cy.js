/// <reference types="cypress" />
import MyAccountPage from "../../pages/MyAccountPage";
import AccountDetailsPage from "../../pages/AccountDetailsPage";
import { faker } from "@faker-js/faker";

let randomFirstName = " ";
let randomLastName = " ";
const password = faker.internet.password();

describe("Edit Account Details Positive and Negative Scenarios", () => {
  beforeEach(() => {
    let randomFirstName = faker.person.firstName();
    let randomLastName = faker.person.lastName();
    cy.visit("http://ecommerce.test.k6.io/");
    cy.registerNewUser(randomFirstName, randomLastName);
  });

  it("Try to update account details w/o entering values for all fields", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getDisplayName().clear();
    AccountDetailsPage.getEmailAddress().clear();
    AccountDetailsPage.getSaveChangesButton().click();
    cy.get(".woocommerce-error")
      .contains("First name is a required field.")
      .should("be.visible");

    cy.get(".woocommerce-error")
      .contains("Last name is a required field.")
      .should("be.visible");

    cy.get("li[data-id='account_display_name']")
      .contains("Display name is a required field.")
      .should("be.visible");

    cy.get(".woocommerce-error")
      .contains("Email address is a required field.")
      .should("be.visible");
  });

  it("Try to update account details w/o entering value for First Name", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getSaveChangesButton().click();

    cy.get(".woocommerce-error")
      .contains("First name is a required field.")
      .should("be.visible");
  });

  it("Try to update account details w/o entering values for Last Name", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getSaveChangesButton().click();

    cy.get(".woocommerce-error")
      .contains("Last name is a required field.")
      .should("be.visible");
  });

  it("Try to update account details w/o entering values for Display Name", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getDisplayName().clear();
    AccountDetailsPage.getSaveChangesButton().click();

    cy.get("li[data-id='account_display_name']")
      .contains("Display name is a required field.")
      .should("be.visible");
  });

  it("Try to update account details w/o entering values for EmailAddress", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getEmailAddress().clear();
    AccountDetailsPage.getSaveChangesButton().click();

    cy.get(".woocommerce-error")
      .contains("Email address is a required field.")
      .should("be.visible");
  });

  it("Update Account Details (w/o password fields) successfully", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getSaveChangesButton().click();
    cy.get(".woocommerce-message")
      .contains("Account details changed successfully.")
      .should("be.visible");
  });

  it("Try to update account details but w/o entering current password", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getNewPassword().type(password);
    AccountDetailsPage.getConfirmNewPassword().type(password);
    AccountDetailsPage.getSaveChangesButton().click();
    cy.get(".woocommerce-error")
      .contains("Please enter your current password.")
      .should("be.visible");
  });

  it("Try to update account details but current password is incorrect negative test", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getCurrentPassword().type(faker.internet.password());
    AccountDetailsPage.getNewPassword().type(password);
    AccountDetailsPage.getConfirmNewPassword().type(password);
    AccountDetailsPage.getSaveChangesButton().click();
    cy.get(".woocommerce-error")
      .contains("Your current password is incorrect.")
      .should("be.visible");
  });

  it("Try to update account details but new passwords don't match", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getCurrentPassword().type(faker.internet.password());
    AccountDetailsPage.getNewPassword().type(faker.internet.password());
    AccountDetailsPage.getConfirmNewPassword().type(faker.internet.password());

    AccountDetailsPage.getSaveChangesButton().click();
    cy.get(".woocommerce-error")
      .contains("New passwords do not match.")
      .should("be.visible");
  });

  it("Try to update account details w/o completing new password fields", () => {
    MyAccountPage.getAccountDetails().click();
    AccountDetailsPage.getFirstName().type(randomFirstName);
    AccountDetailsPage.getLastName().type(randomLastName);
    AccountDetailsPage.getCurrentPassword().type(password);
    AccountDetailsPage.getSaveChangesButton().click();
    cy.get(".woocommerce-error")
      .contains("Please fill out all password fields.")
      .should("be.visible");
  });
});
