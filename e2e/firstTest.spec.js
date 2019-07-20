import { device, by, element, expect } from 'detox';

describe('InitialScreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('default view', async done => {
    await expect(element(by.text('Healthy food'))).toExist();
    done();
  });
});
