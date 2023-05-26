class LeftSideMenuPage {
  getSpotTheBugs() {
    return cy.get("#bugs-form");
  }

  getE2eEcommerce() {
    return cy.get("#auth-shop");
  }

  getGraphqlTesting() {
    return cy.get("#graphql-testing");
  }

  getApiTesting() {
    return cy.get("#api-testing");
  }

  getProductsListShop() {
    return cy.get("#products-list");
  }

  getInterceptApiRequest() {
    return cy.get("#intercept-api");
  }

  getForms() {
    return cy.get('a[href="#homeSubmenu"]');
  }

  getLogin() {
    return cy.get('a[href="login.html"]');
  }

  getRegister() {
    return cy.get('a[href="register.html"]');
  }

  getRecoverPassword() {
    return cy.get('a[href="recover-password.html"]');
  }

  getButtons() {
    return cy.get('a[href="#pageSubmenu"]');
  }

  getCheckboxes() {
    return cy.get('a[href="checkboxes.html"]');
  }

  getRadioButtons() {
    return cy.get('a[href="radiobuttons.html"]');
  }

  getNewTabOrNewWindow() {
    return cy.get('a[href="#browserSubmenu"]');
  }

  getNewBrowserTab() {
    return cy.get('a[href="tab.html"]');
  }

  getNewBrowserWindow() {
    return cy.get('a[href="window.html"]');
  }

  getBtnActions() {
    return cy.get('a[href="#actionsSubmenu"]');
  }

  getDoubleClickBtn() {
    return cy.get('a[href="double-click.html"]');
  }

  getScrolling() {
    return cy.get('a[href="scroll.html"]');
  }

  getMouseHover() {
    return cy.get('a[href="mouse-hover.html"]');
  }

  getShowHideElement() {
    return cy.get('a[href="show-hide-element.html"]');
  }

  getTables() {
    return cy.get('a[href="#tables"]');
  }

  getStaticTable() {
    return cy.get('a[href="web-table.html"]');
  }

  getDynamicTable() {
    return cy.get('a[href="dynamic-table.html"]');
  }

  getDropdowns() {
    return cy.get('a[href="dropdowns.html"]');
  }

  getIframes() {
    return cy.get('a[href="iframe.html"]');
  }

  getAlerts() {
    return cy.get('a[href="alerts.html"]');
  }

  getFileUpload() {
    return cy.get('a[href="file-upload.html"]');
  }

  getDatePickers() {
    return cy.get('a[href="calendar.html"]');
  }

  getLoader() {
    return cy.get('a[href="loader.html"]');
  }

  getPagination() {
    return cy.get('a[href="pagination.html"]');
  }
}
export default new LeftSideMenuPage();
