import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const appengGhReposPlugin = createPlugin({
  id: 'appeng-gh-repos',
  routes: {
    root: rootRouteRef,
  },
});

export const AppengGhReposPage = appengGhReposPlugin.provide(
  createRoutableExtension({
    name: 'AppengGhReposPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
