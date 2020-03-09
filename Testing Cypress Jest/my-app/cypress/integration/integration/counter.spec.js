context('App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('cypress click', () => {
        cy.get('#score').contains("0")
        cy.get('#increase').click()
        cy.get('#increase').click()
        cy.get('#increase').click()
        cy.get('#increase').click()
        cy.get('#score').contains("4")
    });
    it('decramation clicl',()=>{
        cy.get("#increase").click()
        cy.get('#increase').click()
        cy.get('#increase').click()
        cy.get("#score").contains("3")
        cy.get("#decrease").click()
        cy.get("#score").contains("2")
    });
    it('reset click',()=>{
        cy.get("#increase").dblclick()
        cy.get("#increase").dblclick()
        cy.get("#increase").dblclick()
        cy.get("#increase").dblclick()
        cy.get("#score").contains("8")
        cy.get("#reset").click()
        cy.get("#score").contains("0")
    });
    it('cypress type',()=>{
        cy.get('.todo-item').its('length').should('eq', 2);
        cy.get('#toDoInput').type("asd")
        cy.get("#toDoButton").click()
        cy.get('.todo-item').its('length').should('eq', 3);
    })
});
