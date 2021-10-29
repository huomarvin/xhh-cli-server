import { CreateProjectDto } from './../../models/project.dto';
import { ProjectService } from './project.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getProject() {
    return this.projectService.findAll();
  }

  @Post()
  addProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }
}
