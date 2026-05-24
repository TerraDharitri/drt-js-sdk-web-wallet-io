import { getIsValidUrl } from '../getIsValidUrl';

export const runValidUrlTests = (referrer = '') => {
  beforeEach(() => {
    Object.defineProperty(window.document, 'referrer', {
      configurable: true,
      value: referrer
    });
  });

  const searchStrings: { [key: string]: boolean } = {
    'https://wallet.dharitri.org/': true, // allow hash
    'https://wallet.dharitri.org?search=true': true, // allow queryString
    'https%3A%2F%2Fwallet.dharitri.org%2Fdashboard': true,
    'vscode://numbat.vscode-numbat-ide': true,
    'https://www.wallet.dharitri.org/#dashboard/1': true, // no hash
    'http://localhost:3000/': true, // allow localhost
    'www.wallet.dharitri.org': false, // no http
    'wallet.dharitri.org': false, // no http
    '': true, // no url is handled by required()
    google: false // invalid format
  };

  for (let i = 0; i < Object.keys(searchStrings).length; i++) {
    const input = Object.keys(searchStrings)[i];
    const output = searchStrings[input];

    test(`validate ${input} -> ${output}`, async () => {
      const result = getIsValidUrl({ value: input });
      expect(result).toEqual(output);
    });
  }
};
