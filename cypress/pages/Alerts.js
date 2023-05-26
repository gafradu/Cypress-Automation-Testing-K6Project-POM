class Alerts {
  getAlertButton() {
    return cy.get("#alert-btn");
  }

  getConfirmButton() {
    return cy.get("#confirm-btn");
  }
}
export default new Alerts();
