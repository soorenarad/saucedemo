import { test, expect } from "@fixtures/login.fixture"
import { UserType, UserFactory } from "@factory/user.factory";


test("Login", async ({ page ,loginPage }) =>{
    await loginPage.gotoAndWait('', loginPage.createTitle());

    const user = UserFactory.create(UserType.STANDARD)

    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL('/inventory.html');

})