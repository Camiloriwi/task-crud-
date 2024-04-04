// omportando los modulos de @nestjs/mongoose que vamos a utilizar
import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
// importando document de las dependencias o libreria mongoose
import { Document } from "mongoose";

// creando el schema que vamos a utilizar en la coleccion

@Schema()
export class Tasks extends Document {
    @Prop()
    taskName: string;
    @Prop()
    taskDescription: string;
    @Prop()
    taskPriority: string;
    @Prop()
    taskCreatedDate: Date;
    @Prop()
    taskUpdatedDate: Date;
    @Prop()
    taskComplete: boolean;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);