import "cypress-real-events";

describe("description of the suite", () => {
    it("description of the test", () => {
        cy.visit("https://example.cypress.io");
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")
        .realClick();
        cy.get("div[class='action-check'] div:nth-child(1) label:nth-child(1)")
        .realClick()
        .should("not.be.checked");
    });
}); 