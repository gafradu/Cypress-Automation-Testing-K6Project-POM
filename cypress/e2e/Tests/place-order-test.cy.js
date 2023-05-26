/// <reference types="cypress" />
import MainPage from "../../pages/MainPage";
import ShopPage from "../../pages/ShopPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";

//addtocart [24,16,33,17,18,22,23,25,15,19,32]
//selectoptions [12,14,21]
//viewproducts [34]
//Buy on the WordPress swag store! [35]

describe("Add product to cart scenarios", () => {
  beforeEach(() => {
    cy.visit("http://ecommerce.test.k6.io/");
  });

  it("Try to update account details w/o entering values for all fields", () => {
    cy.intercept({
      method: "POST",
      url: "http://ecommerce.test.k6.io/?wc-ajax=add_to_cart",
    }).as("addProductAPI");

    ShopPage.getProductNo(16).click();
    cy.wait("@addProductAPI").its("response.statusCode").should("eq", 200);

    ShopPage.getProductNo(17).click();
    cy.wait("@addProductAPI").its("response.statusCode").should("eq", 200);

    ShopPage.getProductNo(18).click();
    cy.wait("@addProductAPI").its("response.statusCode").should("eq", 200);

    MainPage.getCartPage().click();
    CartPage.getCheckoutButton().click();
    cy.completeCheckoutInformation();

    cy.intercept({
      method: "POST",
      url: "http://ecommerce.test.k6.io/?wc-ajax=checkout",
    }).as("placeOrderAPI");

    CheckoutPage.getPlaceOrderButton().click();
    cy.wait("@placeOrderAPI").its("response.statusCode").should("eq", 200);

    cy.get(".entry-header .entry-title")
      .contains("Order received")
      .should("be.visible");
    cy.get(
      ".woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received"
    )
      .contains("Thank you. Your order has been received.")
      .should("be.visible");
  });
});
