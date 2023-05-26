class Login {
  getEmailAddress() {
    return cy.get("#email");
  }

  getPassword() {
    return cy.get("#password");
  }

  getSubmitButton() {
    return cy.get("#submitLoginBtn");
  }
}
export default new Login();
