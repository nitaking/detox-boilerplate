import testIDs from '../src/testIDs'

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Home Screenが表示される', async () => {
    await expect(element(by.id(testIDs.screen.Home))).toBeVisible();
  });

  it('button1を押下すると、page1が表示される', async () => {
    await element(by.id(testIDs.button1)).tap();
    await expect(element(by.text('Show Page 1!!'))).toBeVisible();
  });

  it('button2を押下すると、page2が表示される', async () => {
    await element(by.id(testIDs.button2)).tap();
    await expect(element(by.text('Show Page 2!!'))).toBeVisible();
  });

  it('button3を押下すると、page3が表示される', async () => {
    await element(by.id(testIDs.button3)).tap();
    await expect(element(by.text('Show Page 3!!'))).toBeVisible();
  });
});
