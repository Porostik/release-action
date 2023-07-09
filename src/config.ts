import { getInput } from '@actions/core';
import { context } from '@actions/github';
import { Config } from './types';

export const provideConfig = (): Config => ({
  apiToken: getInput('API_TOKEN'),
  pullName: getInput('PULL_NAME'),
  owner: context.repo.owner,
  repoName: context.repo.repo,
});
