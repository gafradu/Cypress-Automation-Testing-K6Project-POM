class CheckoutPage {
  getFirstName() {
    return cy.get("#billing_first_name");
  }
  getLastName() {
    return cy.get("#billing_last_name");
  }
  getCompany() {
    return cy.get("#billing_company");
  }

  getCountry() {
    return cy.get("#billing_country_field select");
  }

  getStreetAddress1() {
    return cy.get('input[placeholder="House number and street name"]');
  }
  getStreetAddress2() {
    return cy.get(
      'input[placeholder="Apartment, suite, unit, etc. (optional)"]'
    );
  }
  getCity() {
    return cy.get('input[name="billing_city"]');
  }

  getCounty() {
    return cy.get("#billing_state_field select");
  }

  getZipCode() {
    return cy.get('input[name="billing_postcode"]');
  }
  getPhone() {
    return cy.get("#billing_phone");
  }
  getEmail() {
    return cy.get("#billing_email");
  }
  getAdditionalInformationField() {
    return cy.get("#order_comments");
  }
  getPlaceOrderButton() {
    return cy.get("#place_order");
  }
  getCreateAccountCheckbox() {
    return cy.get("#createaccount");
  }
}
export default new CheckoutPage();
