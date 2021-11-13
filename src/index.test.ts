import {
  removeDiacritics,
  makeUrlSafe,
} from './';

const testString = '¿¡Árvíztűrő tükörfúrógép!? (~\'="#$%&+^{}[]`¨´.:;,)';

describe('Simple Strings', () => {
  it('can normalize diacritics in a string', async () => {
    const result = removeDiacritics(testString);

    expect(result).toBe('¿¡Arvizturo tukorfurogep!? (~\'="#$%&+^{}[]`¨´.:;,)');
  });

  it('can turn an unsafe string into a url safe string', async () => {
    const result = makeUrlSafe(testString);

    expect(result).toBe('arvizturo-tukorfurogep');
  });
});
