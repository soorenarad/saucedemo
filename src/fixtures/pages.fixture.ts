import { LoginPage } from "@pages/loginPage";
import { ProductPage } from "@pages/prouctPage";
import { CartPage } from "@pages/cartPage";
import { test as base, expect } from "@playwright/test"

type Page ={
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage
}

export const test = base.extend<Page>({
    loginPage: async ({ page }, use) =>{
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) =>{
        const productPage = new ProductPage(page);

        await productPage.gotoAndWait(
            "/inventory.html",
            productPage.title()
        );

        await use(productPage);

        // cleanup
        await page.close();
    },
    cartPage: async ({page}, use) =>{
        await use(new CartPage(page));
    }
})

export { expect }