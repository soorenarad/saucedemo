import { test, expect } from "@fixtures/pages.fixture"

test.describe("Checkout", () =>{
    type TestData = {
        firstName: string;
        lastName: string;
        postCode: string;
        products: [string, string];
    };
    const TEST_DATA: TestData = {
        firstName: "TestFirstName",
        lastName: "TestLastName",
        postCode: "TestPostCode",
        products: ['Sauce Labs Backpack', 'Sauce Labs Bike Light'],
    }

    test("Checkout flow", async ({cartPage, productPage}) =>{
        await cartPage.gotoAndWait('/inventory.html', productPage.title());

        await cartPage.addProduct(TEST_DATA.products);

        await cartPage.gotoAndWait('/cart.html', cartPage.title());

        await expect(cartPage.cartCount()).toHaveCount(2);

        await cartPage.clickCheckout();

        await cartPage.fillForm(TEST_DATA.firstName, TEST_DATA.lastName, TEST_DATA.postCode);

        await expect(cartPage.cartCount()).toHaveCount(2);

        await cartPage.finishLastStep();

        await expect(cartPage.title()).toContainText('Complete')

    })
})