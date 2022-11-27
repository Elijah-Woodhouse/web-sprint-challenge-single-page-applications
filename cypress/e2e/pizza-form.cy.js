describe("App", () => {

beforeEach(() => {
    cy.visit("http://localhost:3000");
})

const nameInput = () => cy.get("input[name=name]");
const specialInput = () => cy.get("input[name=special]")
const selectBox = () => cy.get(`select[id="size-dropdown"]`);
const submitBtn = () => cy.get(`button[id="order-button"]`);
const orderBtn = () => cy.get(`button[id="order-pizza"]`);
const peppersChkr = () => cy.get(`input[name="Green_Peppers"]`);

it("sanity check to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).to.equal(4);
    expect(2 + 2).not.to.equal(5);
})

it("clicks order button on home page and routes to the pizza form to make sure all inputs exist on pizza form", () => {
 orderBtn().should("exist");
 orderBtn().click();
 nameInput().should("exist");
 specialInput().should("exist");
 selectBox().should("exist");
 submitBtn().should("exist");
 peppersChkr().should("exist");
})



describe("filling out inputs", () => {

    it("can navigate to the site", () => {
        cy.url().should("include", "localhost");
        orderBtn().click();
        cy.url().should("include", "pizza");
    })

    it("can type in inputs and select elements", () => {
        orderBtn().click();
        nameInput()
        .should("have.value", "")
        .type("Cheeky little guy.")
        .should("have.value", "Cheeky little guy.");

        specialInput()
        .should("have.value", "")
        .type("Butthole Surfer")
        .should("have.value", "Butthole Surfer");

        selectBox()
        .should("have.value", "Small")
        .select("Heart Disease")
        .should("have.value", "Heart Disease");

        peppersChkr()
        .check()
        .should("be.checked")
        .uncheck()
        .should("not.be.checked");
    })



})







})