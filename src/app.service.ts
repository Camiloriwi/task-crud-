import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// async getAll(){
//   return await this.TasksModel.find().exec();
// }

// async createTask(@Body() body): Promise<Tasks>{
//   const newTask = new this.TasksModel({
//     taskName: body.taskName,
//     taskDescription: body.taskDescription,
//     taskPriority: body.taskPriority,
//     taskCreatedDate: body.taskCreatedDate,
//     taskUpdatedDate: body.taskUpdatedDate,
//     taskComplete: body.taskComplete
//   });

//   return await newTask.save();
// }