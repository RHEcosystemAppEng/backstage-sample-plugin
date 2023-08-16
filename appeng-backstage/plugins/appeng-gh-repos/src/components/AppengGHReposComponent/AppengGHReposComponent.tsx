import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';

export const RHKPRepos = {
  "results" : []
}

type GHRepo = {
  id: string,
  name: string,
  description: string
}

type DenseTableProps = {
  repos: GHRepo[];
};

export const DenseTable = ({ repos }: DenseTableProps) => {

  const columns: TableColumn[] = [
    { title: 'id', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Desc', field: 'description' },
  ];

  const data = repos.map(repo => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
    };
  });

  return (
    <Table
      title="Repo List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const AppengGHReposComponent = () => {

  const { value, loading, error } = useAsync(async (): Promise<GHRepo[]> => {
    const response = await fetch('https://api.github.com/users/RHEcosystemAppEng/repos');
    const result = await response.json();
    RHKPRepos.results = result;
    console.log(result);
    return RHKPRepos.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable repos={value || []} />;
};