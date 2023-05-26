class DatePickers {
  getRangeDatePicker() {
    return cy.get("#range-date-calendar");
  }

  getSingleDatePicker() {
    return cy.get("#calendar");
  }
}
export default new DatePickers();
