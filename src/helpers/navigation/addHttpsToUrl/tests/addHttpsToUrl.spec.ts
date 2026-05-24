import { addHttpsToUrl } from '../addHttpsToUrl';

describe('addHttpsToUrl test', () => {
  it('should return the url as it is when url is missing', () => {
    expect(addHttpsToUrl()).toStrictEqual(undefined);
    expect(addHttpsToUrl('')).toStrictEqual('');
  });

  it('should return the url as it is when url has http://', () => {
    expect(addHttpsToUrl('https://dharitri.org')).toStrictEqual(
      'https://dharitri.org'
    );

    expect(addHttpsToUrl('http://dharitri.org')).toStrictEqual(
      'http://dharitri.org'
    );
  });

  it('should add https:// to the url successfully', () => {
    expect(addHttpsToUrl('dharitri.org')).toStrictEqual(
      'https://dharitri.org'
    );
  });
});
