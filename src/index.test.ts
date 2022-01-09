import {
  removeDiacritics,
  makeUrlSafe,
  simpleSearchTermIndex,
} from './';

const testString = '¿¡Árvíztűrő tükörfúrógép!?  ##hello (~\'="#$%&+^{}[]`¨´.:;,)';
const searchTestString = 'bee ¿¡Árvíztűrő  -minus +"include, this" ';

describe('Simple Strings', () => {
  it('can normalize diacritics in a string', async () => {
    const result = removeDiacritics(testString);

    expect(result).toBe('¿¡Arvizturo tukorfurogep!?  ##hello (~\'="#$%&+^{}[]`¨´.:;,)');
  });

  it('can turn an unsafe string into a url safe string', async () => {
    const result = makeUrlSafe(testString);

    expect(result).toBe('arvizturo-tukorfurogep-hello');
  });

  it('can turn a string into a simple search term index', async () => {
    let result = simpleSearchTermIndex(searchTestString);

    expect(result).toEqual('arvizturo bee +"include this" -minus');

    result = simpleSearchTermIndex(searchTestString, false);

    expect(result).toEqual('bee arvizturo -minus +"include this"');
  });
});
