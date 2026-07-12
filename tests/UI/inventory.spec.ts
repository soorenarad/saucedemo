import { test, expect } from "@fixtures/pages.fixture"

test.describe("Inventory logics", () => {

    const productName = 'Sauce Labs Backpack'
    const totalCount = 6

    test('User can add and remove a product', async ({productPage}) =>{
        await productPage.gotoAndWait('/inventory.html', productPage.title());

        await productPage.addToCart(productName);

        await expect(productPage.cartCount()).toHaveText("1");

        await expect(productPage.removeProductBtn(productName)).toBeVisible();

        await productPage.removeProduct(productName);

        await expect(productPage.cartCount()).not.toBeVisible();
    })

    test('Check total count of product', async ({productPage}) =>{
        await productPage.gotoAndWait('/inventory.html', productPage.title());

        await expect(productPage.products()).toHaveCount(totalCount);
    })
})