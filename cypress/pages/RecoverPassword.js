class RecoverPassword {
  getEmailAddress() {
    return cy.get("#email");
  }

  getRecoverPasswordButton() {
    return cy.get('button[id="recover-password"]');
}
}
export default new RecoverPassword();
