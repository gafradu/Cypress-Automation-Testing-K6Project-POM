class OrderReceivedPage {
  getFirstEmail() {
    return cy.get(".woocommerce-order-overview__email.email");
  }
  getDate() {
    return cy.get(".woocommerce-order-overview__date.date");
  }
  getTotal() {
    return cy.get(".woocommerce-order-overview__total.total");
  }
  getPaymentMethod() {
    return cy.get(".woocommerce-order-overview__payment-method.method");
  }
  getBilingAddress() {
    return cy.get(".woocommerce-customer-details address");
  }
  getSecondEmail() {
    return cy.get(".woocommerce-customer-details--email");
  }
  getPhone() {
    return cy.get(".woocommerce-customer-details--phone");
  }
}
export default new OrderReceivedPage();
