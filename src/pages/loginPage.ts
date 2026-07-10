import { Locator, Page} from "@playwright/test"
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    constructor(page: Page){
        super(page);
    }

    private readonly userName = this.page.getByRole("textbox", { name: "Username" });
    private readonly password = this.page.getByRole("textbox", { name: "Password" });
    private readonly loginButton = this.page.getByRole("button", { name: "Login" });
    private readonly title = this.page.locator(".login_logo");

    createTitle(): Locator {
        return this.title;
    }

    async login(username: string, password: string): Promise<void> {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

