import { getOctokit } from '@actions/github';
import { Config } from './types';

export const provideApi = ({
  apiToken,
  owner,
  repoName: repo,
  pullNumber,
}: Config) => {
  const {
    rest: { pulls, repos },
  } = getOctokit(apiToken);

  const getCommints = async () =>
    await pulls.listCommits({
      owner,
      repo,
      pull_number: Number(pullNumber),
      per_page: 100,
    });

  const getLatestRelease = async () =>
    await repos.getLatestRelease({
      owner,
      repo,
    });

  const createRelease = async (name: string) =>
    repos.createRelease({
      owner,
      repo,
      tag_name: name,
      generate_release_notes: true,
    });

  return {
    getCommints,
    getLatestRelease,
    createRelease,
  };
};
