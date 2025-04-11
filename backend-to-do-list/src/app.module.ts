import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [

   //*coneccion a la base de datos
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:'Xgett213',
      database: 'todo_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // IMPORTANTE quitar para produccion la DB puede hacer BOOM!!
    }),

    TaskModule,
  ],
  
 
})
export class AppModule {}
