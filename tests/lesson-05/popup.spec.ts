import { test } from '@playwright/test';

test('Ex1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='03-xpath-todo-list.html']");

    await page.locator("//input[@id='new-task']").fill('Task 1');
    await page.click("//button[@id='add-task']");
    await page.click("//button[@id='task-1-delete']");

    page.on('dialog', async dialog => dialog.accept());
    await page.click("//button[@id='task-1-delete']");

});