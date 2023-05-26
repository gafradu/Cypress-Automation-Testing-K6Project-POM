class ShopPage {
  getSortingFromTop() {
    return cy.get(".woocommerce-ordering:nth-child(2) .orderby");
  }
  getSortingFromBottom() {
    return cy.get(".woocommerce-ordering:nth-child(1) .orderby");
  }
  getProductNo(productId) {
    return cy.get(`a[data-product_id="${productId}"]`);
  }

  //addtocart [24,16,33,17,18,22,23,25,15,19,32]
  //selectoptions [12,14,21]
  //viewproducts [34]
  //Buy on the WordPress swag store! [35]

  getPageNo(PageNo) {
    return cy.get(`a[href='http://ecommerce.test.k6.io/page/${PageNo}/']`);
  }
}
export default new ShopPage();
