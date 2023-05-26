class MyAccountPage {
  getRegisterEmail() {
    return cy.get("#reg_email");
  }
  getRegisterButton() {
    return cy.get("button").contains("Register");
  }
  getLoginEmail() {
    return cy.get("#username");
  }
  getLoginPassword() {
    return cy.get("#password");
  }
  getRememberMeCheckbox() {
    return cy.get("#rememberme");
  }
  getLoginButton() {
    return cy.get("button").contains("Log in");
  }
  getPasswordShow() {
    return cy.get(".show-password-input");
  }

  getDashboard() {
    return cy.get(
      ".woocommerce-MyAccount-navigation a[href='http://ecommerce.test.k6.io/my-account/']"
    );
  }

  getOrders() {
    return cy.get(
      ".woocommerce-MyAccount-navigation a[href='http://ecommerce.test.k6.io/my-account/orders/']"
    );
  }

  getDownloads() {
    return cy.get(
      ".woocommerce-MyAccount-navigation a[href='http://ecommerce.test.k6.io/my-account/downloads/']"
    );
  }

  getAddresses() {
    return cy.get(
      ".woocommerce-MyAccount-navigation a[href='http://ecommerce.test.k6.io/my-account/edit-address/']"
    );
  }

  getAccountDetails() {
    return cy.get(
      ".woocommerce-MyAccount-navigation a[href='http://ecommerce.test.k6.io/my-account/edit-account/']"
    );
  }

  getLogout() {
    return cy.get(
      ".woocommerce-MyAccount-navigation a[href='http://ecommerce.test.k6.io/my-account/customer-logout/?_wpnonce=c2c2f80c19']"
    );
  }
}
export default new MyAccountPage();
