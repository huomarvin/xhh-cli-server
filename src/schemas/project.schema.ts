import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  npmName: string;

  @Prop()
  version: string;

  @Prop()
  installCommand: string;

  @Prop()
  startCommand: string;

  @Prop()
  tag: string[];

  @Prop()
  ignore: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
