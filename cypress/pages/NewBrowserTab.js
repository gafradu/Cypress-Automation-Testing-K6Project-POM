class NewBrowserTab {
  getPressNewTabButton() {
    return cy.get('a[href="web-table.html"]');
  }
}
export default new NewBrowserTab();
