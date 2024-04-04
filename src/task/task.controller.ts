import { Controller, Get ,Body ,Post, Delete,Put, Param, Patch} from '@nestjs/common';
import { TaskService } from './task.service';


@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  
  @Get('todo')
  async findAll(){
    return await this.taskService.getAll();
  }

  @Post('path')
  async create(@Body() body){
    return await this.taskService.createTask(body);
  }
  
  @Delete('path/:id')
  async delete(@Param('id') id){
    return await this.taskService.deleteTask(id);
  }
  
  @Put('path/:id')
  async update(@Param('id') id, @Body() body){
    return await this.taskService.updateTask(id, body);
  }
  
  @Get('path/:id')
  async get(@Param('id') id){
    return await this.taskService.getTask(id);
  }
  
  @Patch('path/:id')
  async complete(@Param('id') id, @Body('taskDescription') taskDescription){
    return await this.taskService.completeTask(id, taskDescription);
  }
  
  @Put('path/:id/uncomplete')
  async uncomplete(@Param('id') id){
    return await this.taskService.uncompleteTask(id);
  }

}
