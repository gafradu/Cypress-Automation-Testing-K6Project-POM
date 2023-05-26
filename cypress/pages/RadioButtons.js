class RadioButtons {
  getRadioButtonNo(radioButtonNo) {
    return cy.get(`#radio-button${radioButtonNo}`);
  }
}
export default new RadioButtons();
