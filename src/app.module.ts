import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScrumController } from './scrum/controller/scrum.controller';
import { ScrumEntity } from './scrum/entity/scrum.entity';
import { ScrumRepository } from './scrum/repository/scrum.repository';
import { ScrumService } from './scrum/service/scrum.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'boa457813',
      database: 'opentutorials',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      ScrumEntity,
    ])
  ],
  controllers: [ScrumController],
  providers: [ScrumService, ScrumRepository],
})
export class AppModule {}
