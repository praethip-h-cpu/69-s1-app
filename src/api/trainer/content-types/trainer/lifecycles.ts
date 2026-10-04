import { createHash } from 'node:crypto';

type TrainerLifecycleEvent = {
  action: string;
  params: {
    data?: Record<string, unknown>;
  };
};

const md5 = (value: string) => createHash('md5').update(value).digest('hex');

export default {
  beforeCreate(event: TrainerLifecycleEvent) {
    const { data } = event.params;

    if (data && typeof data.surname === 'string') {
      data.surname = md5(data.surname);
    }
  },
};