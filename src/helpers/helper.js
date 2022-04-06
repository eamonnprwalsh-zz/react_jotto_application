import i18nInit from './i18n';
import { getLetterMatchCount } from './index';

const help = () => 
  i18nInit()
    .then(() => {
      console.log('Calling getLetterMatchCount...');
      getLetterMatchCount('abc');
    })
    .catch(() => {
      console.log('Cannot Render...');
    });
;

export const exportedForTesting = {
  help,
};
