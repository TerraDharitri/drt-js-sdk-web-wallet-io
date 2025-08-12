import { safeWindow } from '../../lib/index';

export const isInIframe = () => {
  if (!('location' in safeWindow)) {
    return true;
  }

  try {
    return safeWindow.self !== safeWindow.top;
  } catch (e) {
    return true;
  }
};
