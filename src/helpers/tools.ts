import { Locator } from '@playwright/test';


export async function isAscending(locator: Locator): Promise<boolean> {
    const values = await locator.evaluateAll(elements =>
        elements.map(el =>
            Number(el.textContent?.replace(/[^0-9.]/g, '') || 0)
        )
    );

    return values.every((v, i, arr) => i === 0 || arr[i - 1] <= v);
}

export async function isDescending(locator: Locator): Promise<boolean> {
    const values = await locator.evaluateAll(elements =>
        elements.map(el =>
            Number(el.textContent?.replace(/[^0-9.]/g, '') || 0)
        )
    );

    return values.every((value, index, arr) =>
        index === 0 || arr[index - 1] >= value
    );
}