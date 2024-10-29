describe("Teste p/ carregar e navegar", () => {
  it("Verifica se carregou corretamente", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.contains("Why Cypress?").should("be.visible");
  });


  it("Verifica se o footer foi carregado corretamente", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.get(".footer").scrollIntoView();
    cy.contains("© 2024 Cypress.io. All rights reserved.").should("be.visible");
  });


  it("Navegando até 'End-to-end testing'", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.contains("End-to-end testing").click();
    cy.contains("End-to-end testing").should("be.visible");
  });


  it("Falhando propositalmente", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress/paodebatata", {
      failOnStatusCode: false,
    });
    cy.contains("Page Not Found").should("be.visible");
  });
});


describe("Cookies", () => {
  it("Aceita popup chatão", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.get(".osano-cm-storage-policy").should("be.visible");
    cy.get(".osano-cm-accept").click();
    cy.get(".osano-cm-storage-policy").should("not.be.visible");
  });


  it("Recusa popup chatão", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.get(".osano-cm-storage-policy").should("be.visible");
    cy.get(".osano-cm-deny").click();
    cy.get(".osano-cm-storage-policy").should("not.be.visible");
  });


  it("Carrega cookies e busca 'osano_consentmanager'", () => {
    cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
    cy.get(".osano-cm-accept").click();
    cy.getAllCookies().then((cookies) => {
      expect(
        cookies.find((cookie) => cookie.name === "osano_consentmanager")
      ).to.have.property("value");
    });
  });
});
