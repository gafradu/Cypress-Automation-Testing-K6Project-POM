class InterceptApiRequest {
  getPostTitleInput() {
    return cy.get("#postTitleInput");
  }

  getCreatePostButton() {
    return cy.get("selector").contains("CREATE post");
  }

  getUpdatePostButton() {
    return cy.get("selector").contains("UPDATE post");
  }
}
export default new InterceptApiRequest();
