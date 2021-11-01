import { Command, CommandSchema } from '@/schemas/command.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandController } from './command.controller';
import { CommandService } from './command.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Command.name, schema: CommandSchema }]),
  ],
  controllers: [CommandController],
  providers: [CommandService],
})
export class CommandModule {}
