import { test } from "@playwright/test"
import { rm } from 'fs/promises';

test("Cleanup", async () => {

    await rm('playwright/.auth/auth.json', {
        force: true,
    });

})