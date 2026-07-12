import { Locator, Page} from "@playwright/test"
import { BasePage } from "./basePage";

export class ProductPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly card = this.page.locator('.inventory_item');
    private readonly cart = this.page.locator('.shopping_cart_link');


    productInPage(name: string): Locator {
        return this.card.filter({ hasText: name})
    }

    removeProductBtn(name: string): Locator {
        const product = this.productInPage(name);
        return product.getByRole("button", { name: "Remove" });
    }

    async removeProduct(name: string): Promise<void> {
        await this.removeProductBtn(name).click();
    }

    products():Locator {
        return this.card
    }

    async addToCart(name: string): Promise<void> {
        const product = this.productInPage(name);
        await product.getByRole("button", { name: 'Add to cart' }).click();
    }

    cartCount(): Locator {
        return this.cart.locator('.shopping_cart_badge')
    }
}