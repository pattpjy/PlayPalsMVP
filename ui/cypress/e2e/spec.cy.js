describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should show the app name in the header', () => {
    cy.get("h1").contains("Kid Tasks").click()
    // cy.url().should("include", "/Saved-Activities")
    //^^fix this route test when we have solidified h1 click implementation
  });

  it('Should show an icon in the upper left side of the page in the nav/header', () => {
    cy.get("svg.clipboard").click()

  });
  
  it('Should show an icon in the upper right side of the page in the nav/header', () => {
    cy.get("svg.dude").click()
    cy.url().should("include", "/Profile")

  });
  
  it("Should have a welcome message", () => {
    cy.get(".hello-message").contains("Hi Patt! Let's play with Maddie!")
  })
  
  it("Should have a button to take user to the activities display", () => {
    cy.get("button.find").contains("Find a New Activity").click()
    cy.url().should("include", "/Activities")
  })
  
  it("Should have a button to take user to the activities display", () => {
    cy.get("button.go").contains("Go to Saved Activities").click()
    cy.url().should("include", "/Saved-Activities")
  })
})