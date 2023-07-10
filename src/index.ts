import { info, setFailed } from '@actions/core';
import { provideApi } from './api';
import { provideConfig } from './config';

const main = async () => {
  try {
    const config = provideConfig();
    const api = provideApi(config);
    console.log(config);

    const data = await api.createRelease();

    info(data.data.url);
  } catch (e) {
    setFailed(e);
  }
};

main();
