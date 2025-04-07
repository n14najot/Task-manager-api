import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, AuthModule, TasksModule, CommonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
