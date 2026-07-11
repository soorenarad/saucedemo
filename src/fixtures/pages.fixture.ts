import { LoginPage } from "@pages/loginPage";
import { ProductPage } from "@pages/prouctPage";
import { test as base, expect } from "@playwright/test"

type Page ={
    loginPage: LoginPage;
    productPage: ProductPage;
}

export const test = base.extend<Page>({
    loginPage: async ({ page }, use) =>{
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) =>{
        await use(new ProductPage(page));
    }
})

export { expect }