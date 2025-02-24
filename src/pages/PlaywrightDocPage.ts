import { Page } from '@playwright/test';
import { PageManager } from '../utils/PageManager';
import logger from '../utils/logger';

export class PlaywrightDocPage {
    private page: Page;

    constructor() {
        this.page = PageManager.getInstance().getPage();
    }

    // Locators
    private readonly getStartedLink = 'a:text("Get started")';
    private readonly docsSearchInput = 'input[placeholder="Search docs"]';
    private readonly apiLink = 'a:text("API")';
    private readonly pageTitle = '.navbar__title';

    // Actions
    async navigateToHome() {
        await this.page.goto('https://playwright.dev');
        logger.info('Navigated to Playwright documentation homepage');
    }

    async clickGetStarted() {
        await this.page.click(this.getStartedLink);
        logger.info('Clicked on Get Started link');
    }

    async searchDocs(searchText: string) {
        await this.page.fill(this.docsSearchInput, searchText);
        logger.info(`Searched for: ${searchText}`);
    }

    async navigateToAPI() {
        await this.page.click(this.apiLink);
        logger.info('Navigated to API section');
    }

    // Getters
    async getPageTitle(): Promise<string> {
        const title = await this.page.textContent(this.pageTitle);
        return title || '';
    }
}