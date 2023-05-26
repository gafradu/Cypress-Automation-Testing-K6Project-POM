class Checkboxes {
  getCheckboxNo(checkboxNo) {
    return cy.get(`checkbox${checkboxNo}`);
  }

  getResetButton() {
    return cy.get("button").contains("Reset");
  }
  
}
export default new Checkboxes();
