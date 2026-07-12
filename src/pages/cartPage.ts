import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"
import { ProductPage } from "./prouctPage"


export class CartPage extends BasePage {

    private readonly products: ProductPage

    constructor(page: Page) {
        super(page);
        this.products = new ProductPage(page);
    }

    private readonly carts = this.page.locator(".cart_item");
    // private readonly removeItem = this.page.getByRole("button", { name: `Remove` });
    private readonly checkout = this.page.getByRole("button", { name: `Checkout` });
    private readonly form = this.page.locator(".checkout_info");
    private readonly firstName = this.form.getByTestId("firstName");
    private readonly lastName = this.form.getByTestId("lastName");
    private readonly postalCode = this.form.getByTestId("postalCode");
    private readonly continue = this.page.getByRole("button", { name: `continue` });
    private readonly finish = this.page.getByRole("button", { name: `Finish` });

    async addProduct(name: [string, string]) {
        await this.products.addToCart(name[0]);
        await this.products.addToCart(name[1]);
    }

    cartCount(): Locator {
        return this.carts
    }

    async clickCheckout(): Promise<void> {
        await this.checkout.click();
    }

    async fillForm(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continue.click();
    }

    async finishLastStep(): Promise<void> {
        await this.finish.click();
    }

}