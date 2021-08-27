import { router } from './import';

export default {
  router: router,
  somefunc: () => console.log('here'),
  dir: '__dirname',
  name: 'test-plugin',
  prefix: '/test-plugin', // empty for root
  version: '0.0.2',
};
