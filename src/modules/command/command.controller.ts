import { Controller, Get } from '@nestjs/common';
import { CommandService } from './command.service';

@Controller('command')
export class CommandController {
  constructor(private readonly commandService: CommandService) {}

  @Get()
  getProject() {
    return this.commandService.findAll();
  }
}
