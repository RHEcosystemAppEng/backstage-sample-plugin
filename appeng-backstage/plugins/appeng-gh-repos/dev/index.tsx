import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { appengGhReposPlugin, AppengGhReposPage } from '../src/plugin';

createDevApp()
  .registerPlugin(appengGhReposPlugin)
  .addPage({
    element: <AppengGhReposPage />,
    title: 'Root Page',
    path: '/appeng-gh-repos'
  })
  .render();
