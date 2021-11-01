import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandService {
  findAll() {
    return {
      results: [
        {
          command: 'init',
          commandContent: 'init',
          options: [
            {
              flags: '-f, --force',
              description: '是否强制初始化',
              //   defaultValue?: string | boolean;
            },
          ],
          description: '初始化一个项目',
          packageName: '@xhh-cli-dev/init',
          packageVersion: 'latest',
        },
        {
          command: 'kill',
          commandContent: 'kill <port>',
          //   options: [
          //     {
          //       flags: '-p, --port <port>',
          //       description: '杀掉进程的端口号',
          //       //   defaultValue?: string | boolean;
          //     },
          //   ],
          description: '删掉对应端口号的进程',
          packageName: '@xhh-cli-dev/kill',
          packageVersion: 'latest',
        },
      ],
    };
  }
}
