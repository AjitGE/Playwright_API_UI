import { Page, Browser, BrowserContext } from '@playwright/test';
import logger from './logger';

export class PageManager {
    private static instance: PageManager;
    private page: Page | null = null;
    private browser: Browser | null = null;
    private context: BrowserContext | null = null;

    private constructor() {}

    public static getInstance(): PageManager {
        if (!PageManager.instance) {
            PageManager.instance = new PageManager();
        }
        return PageManager.instance;
    }

    public setPage(page: Page) {
        this.page = page;
        logger.info('Page instance set in PageManager');
    }

    public getPage(): Page {
        if (!this.page) {
            throw new Error('Page is not initialized');
        }
        return this.page;
    }

    public setBrowser(browser: Browser) {
        this.browser = browser;
        logger.info('Browser instance set in PageManager');
    }

    public getBrowser(): Browser {
        if (!this.browser) {
            throw new Error('Browser is not initialized');
        }
        return this.browser;
    }

    public setContext(context: BrowserContext) {
        this.context = context;
        logger.info('Context instance set in PageManager');
    }

    public getContext(): BrowserContext {
        if (!this.context) {
            throw new Error('Context is not initialized');
        }
        return this.context;
    }

    public async closePage() {
        if (this.page) {
            await this.page.close();
            this.page = null;
            logger.info('Page closed');
        }
    }

    public async closeContext() {
        if (this.context) {
            await this.context.close();
            this.context = null;
            logger.info('Context closed');
        }
    }

    public async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
            logger.info('Browser closed');
        }
    }
}