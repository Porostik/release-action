import { provideApi } from './api';
import { provideConfig } from './config';

const main = async () => {
  const config = provideConfig();
  const api = provideApi(config);

  await api.createRelease('1');
};
