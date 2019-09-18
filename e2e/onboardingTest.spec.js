describe('SanityTest', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('title'))).toBeVisible();
  // });

  it('should follow onboarding Screens', async () => {
    await element(by.id('nextButton')).tap();
    await element(by.id('nextButton')).tap();
    await element(by.id('doneButton')).tap();
    await expect(element(by.id('submitTerms'))).toBeVisible();
    await element(by.id('submitButton')).tap();
    await expect(element(by.text('Submit'))).toBeVisible();
    await element(by.id('submitButton_1')).tap();
  });

  // it('should show world screen after tap', async () => {
  //   // await element(by.id('world_button')).tap();
  //   await expect(element(by.text('next'))).toBeVisible();
  // });
});
