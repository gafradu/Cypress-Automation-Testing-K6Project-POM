class Dropdowns {
  getSimpleDropdown() {
    return cy.get('select[class=".browser-default.custom-select"]');
  }
}
export default new Dropdowns();
