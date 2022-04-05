import * as index from './index';
import { exportedForTesting } from './helper';
import i18nInit from './i18n';

jest.mock('./index', () => ({ getLetterMatchCount: jest.fn() }));
//jest.mock('./i18n', () => jest.fn().mockResolvedValue());

jest.mock('./i18n', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('should test getLetterMatch runs', () => {
  test('should test getLetterMatchCount runs', async () => {
    i18nInit.mockResolvedValue(() => Promise.resolve('RESOLVED'))
    await exportedForTesting.help();
    expect(index.getLetterMatchCount).toBeCalledTimes(1);
  });

  test('should test getLetterMatchCount doesnt run', async () => {
    i18nInit.mockImplementationOnce(() => Promise.reject('REJECTED'))
    await exportedForTesting.help();
    expect(index.getLetterMatchCount).toBeCalledTimes(0);
  });
});
