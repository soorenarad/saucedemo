import { Locator, Page} from "@playwright/test"

export abstract class BasePage {

    constructor(protected page: Page) {}

    async gotoAndWait(url: string, locator: Locator, timeout: number = 10000): Promise<void> {
        await this.page.goto(url);
        await locator.waitFor({ state: 'visible', timeout: timeout });
    }

    title(){
        return this.page.locator(".title");
    }
}