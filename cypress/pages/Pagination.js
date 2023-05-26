class Pagination {
  getPagePosition(pagePosition) {
    return cy.get(`.page-item:nth-child(${pagePosition})`);
  }
}
export default new Pagination();
