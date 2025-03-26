import { expect, type Page } from "@playwright/test";

export class visualCompare {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async visualCompareBasic(screenshotName: string) {
        await expect(this.page).toHaveScreenshot(screenshotName)
    }
    async visualCompareFullScreen(screenshotName: string) {
        await expect(this.page).toHaveScreenshot(screenshotName, { fullPage: true })
    }
    async visualCompareWithMaxDiffPixel(screenshotName: string) {
        await expect(this.page).toHaveScreenshot(screenshotName, { maxDiffPixels: 100 })
    }
    async visualCompareWithMaxpixelRatio(screenshotName: string) {
        await expect(this.page).toHaveScreenshot(screenshotName, { maxDiffPixelRatio: 0.04 })
    }
    async visualCompareWithMaskingDynamicElement(screenshotName: string, locator: string) {
        const elementLocator = this.page.locator(locator)
        await expect(this.page).toHaveScreenshot(screenshotName, { mask: [elementLocator] })
    }
}