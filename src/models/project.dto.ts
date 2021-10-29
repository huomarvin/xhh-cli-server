export class CreateProjectDto {
  readonly name: string;
  readonly npmName: string;
  readonly version: string;
  installCommand?: string;
  startCommand?: string;
  tag?: string[];
  ignore?: string[];
}
