import * as index from './index';
import { exportedForTesting } from './helper';

jest.mock('./index', () => ({ getLetterMatchCount: jest.fn() }));
//jest.mock('./i18n', () => jest.fn().mockResolvedValue());

jest.mock('./i18n', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve('RESOLVED'))
    .mockImplementationOnce(() => Promise.reject('REJECTED')),
}));

describe('should test getLetterMatch runs', () => {
  test('should test getLetterMatchCount runs', async () => {
    await exportedForTesting.help();
    expect(index.getLetterMatchCount).toBeCalledTimes(1);
  });

  test('should test getLetterMatchCount doesnt run', async () => {
    await exportedForTesting.help();
    expect(index.getLetterMatchCount).toBeCalledTimes(0);
  });
});
