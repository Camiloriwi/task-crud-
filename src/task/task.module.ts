import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksSchema, Tasks } from './task.entity';

@Module({

  imports:[
    MongooseModule.forFeature([
      {
        name: Tasks.name,
        schema: TasksSchema
      }
    ]) 
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
