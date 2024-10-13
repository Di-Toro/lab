/// <reference = cypress >


describe("Testes de criacao, registo e login", () => {
    it("Teste de criacao de usuario com sucesso!", () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type('Toguro')
        cy.get('#Text1').type('Ribeiro')
        cy.get('#username').type('EuToGuro')
        cy.get('#password').type('Hunter2')
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should('contain', 'Registration successful')
    })


    it("Teste de criacao de usuario com falha", () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type('Toguro')
        cy.get('#Text1').type('Ribeiro')
        cy.get('#username').type('EuToGuro')
        cy.get('.btn-primary').should('be.disabled')
    })


    it("Teste de login com sucesso", () => {
        let data = CreateUser()
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(data[0])
        cy.get('#password').type(data[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should('contain.text', data[0])
    })


    it("Teste de deletar usuario, login e falhar", () => {
        let data = CreateUser()
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(data[0])
        cy.get('#password').type(data[1])
        cy.get('.btn-primary').click()
        cy.get('.ng-binding > a').click()
        cy.get('.btn').click()
        cy.get('#username').type(data[0])
        cy.get('#password').type(data[1])
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should('contain', 'Username or password is incorrect')
    })
})


function CreateUser() {
    let hour = new Date().getHours().toString()
    let minute = new Date().getMinutes().toString()
    let second = new Date().getSeconds().toString()
    let ID = hour + minute + second + "ID"
    let Password = hour + minute + second + "Password"
    let data = [ID, Password]

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(Password)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain', 'Registration successful')
    
	return data
}
