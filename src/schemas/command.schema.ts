import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommandDocument = Command & Document;

@Schema()
export class Command {
  @Prop()
  commandName: string;

  @Prop()
  options: CommandOption[];

  @Prop()
  packageName: string;

  @Prop()
  packageVersion: string;
}

export class CommandOption {
  flags: string;
  description?: string;
  defaultValue?: string | boolean;
}

export const CommandSchema = SchemaFactory.createForClass(Command);
