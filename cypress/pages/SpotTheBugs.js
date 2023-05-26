class SpotTheBugs {
  getFirstName() {
    return cy.get("#firstName");
  }

  getLastName() {
    return cy.get("#lastName");
  }

  getPhoneNumber() {
    return cy.get("#phone");
  }

  getCountry() {
    return cy.get('select[id="countries_dropdown_menu"]');
  }

  getEmailAddress() {
    return cy.get("#emailAddress");
  }

  getPassword() {
    return cy.get("#password");
  }

  getAgreeCheckbox() {
    return cy.get(".form-check-input");
  }

  getRegisterButton() {
    return cy.get("#registerBtn");
  }
}
export default new SpotTheBugs();
