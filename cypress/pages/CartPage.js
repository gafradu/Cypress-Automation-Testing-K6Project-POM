class CartPage {
  getCheckoutButton() {
    return cy.get(".checkout-button.button.alt.wc-forward");
  }
}
export default new CartPage();
