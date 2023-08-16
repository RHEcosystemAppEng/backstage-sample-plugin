import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { AppengGHReposComponent } from '../AppengGHReposComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to appeng-gh-repos!" subtitle="AppEng Ecosystem Engineering Group">
      <HeaderLabel label="Owner" value="AppEng" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="What is this?">
            <Typography variant="body1">
              This is a sample plugin demo with backstage.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <AppengGHReposComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
