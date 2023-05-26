class FileUpload {
  getSubmitButton() {
    return cy.get("button").contains("Submit");
  }

  getBrowseButton() {
    return cy.get("#file_upload");
  }
}
export default new FileUpload();
