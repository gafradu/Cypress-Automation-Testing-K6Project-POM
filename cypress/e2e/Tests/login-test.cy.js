/// <reference types="cypress" />

import LeftSideMenuPage from "../../pages/LeftSideMenuPage";
import Login from "../../pages/Login";

describe("Login Page Positive and Negative Scenarios", () => {
  const correctEmail = "admin@admin.com";
  const correctPassword = "admin123";
  const incorrectEmail = "rgafton@4mayo.com";
  const incorrectPassword = "owuehguegyqhig";

  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Try to Login w/o credentials negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getLogin().click();
    Login.getSubmitButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login with w/o Email negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getLogin().click();
    Login.getPassword().type(correctPassword);
    Login.getSubmitButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login w/o Password negative test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getLogin().click();
    Login.getEmailAddress().type(correctEmail);
    Login.getSubmitButton().click();
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login with incorrect email negative test", () => {
    cy.login(incorrectEmail, correctPassword);
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Try to Login with incorrect password negative test", () => {
    cy.login(correctEmail, incorrectPassword);
    cy.get("#message")
      .should("be.visible")
      .contains(
        `Bad credentials! Please try again! Make sure that you've registered.`
      );
  });

  it("Login with correct credentials positive test", () => {
    cy.login(correctEmail, correctPassword);
    cy.get("#message")
      .should("be.visible")
      .contains(`${correctEmail}, you have successfully logged in!`);
  });
});
