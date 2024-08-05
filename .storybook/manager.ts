import { addons } from '@storybook/manager-api';
import testUI from './themes/test-ui';

addons.setConfig({
  theme: testUI,
  enableShortcuts: false,
});
