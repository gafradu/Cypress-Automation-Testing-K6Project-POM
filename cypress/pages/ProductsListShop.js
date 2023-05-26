class ProductsListShop {
  getAddToCartButtonforItemNo(shopItemNo) {
    return cy.get(`.shop-item:nth-child(${shopItemNo}) .shop-item-button`);
  }

  getPurchaseButton() {
    return cy.get("button[class='btn btn-primary btn-purchase']");
  }

  getRemoveButtonForItemNo(ItemNo) {
    return cy.get(`.cart-row:nth-child(${ItemNo}) .btn.btn-danger`);
  }

  getQuantityForItemNo(ItemNo) {
    return cy.get(`.cart-row:nth-child(${ItemNo}) .cart-quantity-input`);
  }

  getPriceForItemNo(ItemNo) {
    return cy.get(`.cart-row:nth-child(${ItemNo}) .cart-price cart-column`);
  }

  getGoBackToProductsList() {
    return cy.get(
      'a[href="https://qa-practice.netlify.app/products_list.html"]'
    );
  }
}
export default new ProductsListShop();
