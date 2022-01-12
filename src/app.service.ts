import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private config2: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey2 = this.config2.apiKey;
    const dbName2 = this.config2.database.name;
    const dbPort2 = this.config2.database.port;

    console.log(this.tasks);
    return `Hello World! ${this.apiKey} tasks length: ${this.tasks.length}, apiKey2: ${apiKey2}, dbName2: ${dbName2}, dbPort2: ${dbPort2}`;
  }
}
