describe('pizza-form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const  nameInput = () => cy.get('input[name=name').should('exist')
    const emailInput =()  => cy.get('input[name=email]')
    const phoneInput  = () => cy.get('input[name=phone]')
    const pepperoni =  ()  => cy.get('input[name=pepperoni')
    const onions = () => cy.get('input[name=onions')
    const button = () => cy.get('#submit-btn')

    it('sanity check', () => {
        expect(1+1).to.equal(2)
    })

    it('Input Exists', () => {
        //Start Assertion(s)
        nameInput().should('exist')
        
        pepperoni().should('exist')
        
        
        onions().should('exist')
       
        button().should('exist')
    })

    // Start type testing
    it('Type in Name Field', () => {
        nameInput().type('Craig')
        nameInput().should('have.value', 'Craig')
        
    })

    //Start Checkbox testing
    it('Check Toppings Checkboxes', () => {
        pepperoni().check()
       
        onions().check()
        
    })

    //Submit Button Test
    it('Submit Form', () => {
        button().click()
    })
}) 

