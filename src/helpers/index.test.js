import {getLetterMatchCount} from './index'

describe("getLetterMatchCount tests", () => {

  const secretWord = 'party'

  test("that letter count is correct when no matching letters", () => {
    expect(getLetterMatchCount('bones', secretWord)).toEqual(0)
  });

  test("that letter count is correct when 3 matching letters", () => {
    expect(getLetterMatchCount('train', secretWord)).toEqual(3)
  });

  test("that letter count is correct when duplicate matching letters", () => {
    expect(getLetterMatchCount('parka', secretWord)).toEqual(3)
  });
});
