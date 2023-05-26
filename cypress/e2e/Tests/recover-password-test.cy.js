/// <reference types="cypress" />

describe("Recover Password Page Positive and Negative Scenarios", () => {
  const correctEmail = "admin@admin.com";
  const incorrectEmail = "rgafton@4mayo.com";

  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Recover Password for correct Email positive test", () => {
    cy.recoverPassword(correctEmail);
    cy.get("#message")
      .should("be.visible")
      .contains(
        `An email with the new password has been sent to ${correctEmail}. Please verify your inbox!`
      );
  });

  it("Try to Recover Password for incorrect Email negative test", () => {
    cy.recoverPassword(incorrectEmail);
    cy.get("#message")
      .should("be.visible")
      .contains(
        `${incorrectEmail} account does not exist. Please try another email`
      );
  });
});
