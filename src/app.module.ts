import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bootcamps_2902093',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    
    
    BootcampsModule,
    
    
    CourseModule,
    
    
    UsersModule,
    
    
    ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
