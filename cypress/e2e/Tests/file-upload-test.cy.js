/// <reference types="cypress" />

import FileUpload from "../../pages/FileUpload";
import LeftSideMenuPage from "../../pages/LeftSideMenuPage";

describe("File Upload Page Positive and Negative Scenarios", () => {
  
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Upload File positive test", () => {
    const fileName = "New-England-Patriots-Fantasy-Football-Preview-1.png";
    
    LeftSideMenuPage.getFileUpload().click();
    FileUpload.getBrowseButton().selectFile(`cypress/fixtures/${fileName}`);
    FileUpload.getSubmitButton().click();
    cy.get("#file_upload_response")
      .should("be.visible")
      .contains(`You have successfully uploaded "${fileName}"`);
  });
});
