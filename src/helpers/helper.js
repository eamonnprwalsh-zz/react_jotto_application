import i18nInit from './i18n';
import { getLetterMatchCount } from './index';

const init = i18nInit();

console.log('SHOULD BE A MOCK AND CALLED TWICE', i18nInit);
console.log('SHOULD BE PROMISE, ONCE RESOLVED, ONCE REJECTED', init);

const help = () => {
  init
    .then(() => {
      getLetterMatchCount('abc');
    })
    .catch(() => {
      console.log('Cannot Render...');
    });
};

export const exportedForTesting = {
  help,
};
