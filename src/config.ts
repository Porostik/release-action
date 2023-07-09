import { getInput } from '@actions/core';
import { Config } from './types';

export const provideConfig = (): Config => ({
  apiToken: getInput('API_TOKEN'),
  owner: getInput('OWNER'),
  commitPrefix: getInput('COMMIT_PREFIX'),
  pullNumber: getInput('PULL_NUMBER'),
  repoName: getInput('REPO_NAME'),
});
