class AccountDetailsPage {
  getFirstName() {
    return cy.get("#account_first_name");
  }
  getLastName() {
    return cy.get("#account_last_name");
  }
  getDisplayName() {
    return cy.get("#account_display_name");
  }
  getEmailAddress() {
    return cy.get("#account_email");
  }
  getCurrentPassword() {
    return cy.get("#password_current");
  }
  getNewPassword() {
    return cy.get("#password_1");
  }
  getConfirmNewPassword() {
    return cy.get("#password_2");
  }

  getLoginButton() {
    return cy.get("button").contains("Log in");
  }
  getPasswordShow() {
    return cy.get(".show-password-input");
  }
  getSaveChangesButton() {
    return cy.get("button").contains("Save changes");
  }
}
export default new AccountDetailsPage();
