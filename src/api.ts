import { getOctokit } from '@actions/github';
import { Config } from './types';

export const provideApi = ({ apiToken, owner, repoName: repo }: Config) => {
  const {
    rest: { repos },
  } = getOctokit(apiToken);

  const createRelease = async (name: string) =>
    repos.createRelease({
      owner,
      repo,
      tag_name: name,
      generate_release_notes: true,
    });

  return {
    createRelease,
  };
};
