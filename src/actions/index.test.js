import moxios from 'moxios'
import {getSecretWord} from './index'

describe('getSecretWord', () => {

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('secretWord is returned', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: 'party'
      })
    })

    // by returning this the test function wont end until the promise is resolved
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe('party')
    });

  })
})