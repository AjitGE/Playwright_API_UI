import { test, expect } from '@playwright/test';
import { PlaywrightDocPage } from '../src/pages/PlaywrightDocPage';
import { PageManager } from '../src/utils/PageManager';
import logger from '../src/utils/logger';

test.describe('Playwright Documentation Tests', () => {
    let docPage: PlaywrightDocPage;

    test.beforeEach(async ({ page, browser, context }) => {
        // Set up PageManager instances
        const pageManager = PageManager.getInstance();
        pageManager.setPage(page);
        pageManager.setBrowser(browser);
        pageManager.setContext(context);

        // Initialize page object
        docPage = new PlaywrightDocPage();
        logger.info('Test setup completed');
    });

    test('should navigate to homepage and verify title', async () => {
        await docPage.navigateToHome();
        const title = await docPage.getPageTitle();
        expect(title).toContain('Playwright');
        logger.info('Homepage title verification completed');
    });

    test('should be able to search documentation', async () => {
        await docPage.navigateToHome();
        await docPage.searchDocs('page object model');
        logger.info('Search test completed');
    });

    test('should navigate to API section', async () => {
        await docPage.navigateToHome();
        await docPage.navigateToAPI();
        logger.info('API navigation test completed');
    });

    test.afterEach(async () => {
        const pageManager = PageManager.getInstance();
        await pageManager.closePage();
        logger.info('Test cleanup completed');
    });
});