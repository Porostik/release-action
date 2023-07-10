import { getOctokit } from '@actions/github';
import { Config } from './types';

export const provideApi = ({
  apiToken,
  owner,
  repoName: repo,
  pullName,
}: Config) => {
  const {
    rest: { repos },
  } = getOctokit(apiToken);

  const createRelease = async () =>
    repos.createRelease({
      owner,
      repo,
      tag_name: pullName,
      generate_release_notes: true,
    });

  return {
    createRelease,
  };
};
