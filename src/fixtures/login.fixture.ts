import { LoginPage } from "@pages/loginPage";
import { test as base, expect } from "@playwright/test"

type Page ={
    loginPage: LoginPage;
}

export const test = base.extend<Page>({
    loginPage: async ({ page }, use) =>{
        await use(new LoginPage(page));
    }
})

export { expect }