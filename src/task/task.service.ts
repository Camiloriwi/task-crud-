import { Injectable,Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tasks  } from './task.entity';
import { Model } from 'mongoose';


@Injectable()
export class TaskService {
  constructor(@InjectModel(Tasks.name) private TaskModel: Model<Tasks>){}

  async getAll(){
    return await this.TaskModel.find().exec();
    
  }

  async createTask(@Body() body): Promise<Tasks>{
    const newTask = new this.TaskModel({
      taskName: body.taskName,
      taskDescription: body.taskDescription,
      taskPriority: body.taskPriority,
      taskCreatedDate: body.taskCreatedDate,
      taskUpdatedDate: body.taskUpdatedDate,
      taskComplete: body.taskComplete
    });
    return await newTask.save();
  }
  
  async deleteTask(id: string){
    return await this.TaskModel.findByIdAndDelete(id).exec();
  }
  
  async updateTask(id: string, body){
    return await this.TaskModel.findByIdAndUpdate(id, body, {new: true}).exec();
  }
  
  async getTask(id: string){
    return await this.TaskModel.findById(id).exec();
  }
  
  async completeTask(id: string ,taskDescription: string){
    return await this.TaskModel.findByIdAndUpdate(id,{taskDescription}).exec();
  }
  
  async uncompleteTask(id: string){
    return await this.TaskModel.findByIdAndUpdate(id, {taskComplete: false}, {new: true}).exec();
  }
}
