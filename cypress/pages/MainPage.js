class MainPage {
  getHomePage() {
    return cy.get(".nav-menu a[href='http://ecommerce.test.k6.io/']");
  }
  getCartPage() {
    return cy.get(".nav-menu a[href='http://ecommerce.test.k6.io/cart/']");
  }
  getCheckoutPage() {
    return cy.get(".nav-menu a[href='http://ecommerce.test.k6.io/checkout/']");
  }
  getMyAccountPage() {
    return cy.get(
      ".nav-menu a[href='http://ecommerce.test.k6.io/my-account/']"
    );
  }
  getSamplePage() {
    return cy.get(
      ".nav-menu a[href='http://ecommerce.test.k6.io/sample-page/']"
    );
  }
  getSearchProducts() {
    return cy.get("#woocommerce-product-search-field-0");
  }
  getSearch() {
    return cy.get("input[placeholder='Search …']");
  }
}
export default new MainPage();
