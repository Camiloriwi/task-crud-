import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://camilo:nFgFrb0li3JxbLr6@node.ktvwioe.mongodb.net/')
  ,TaskModule],
  controllers: [AppController],
  providers: [AppService],

})


// @Module({
//   imports: [TaskModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {}
