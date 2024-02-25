import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from "./typeorm";

/* export default {
  type: 'postgres',
  host: ConfigService.get('DB_HOST'),
  port: ConfigService.get('DB_PORT') as any,
  username: ConfigService.get('DB_USER'),
  password: ConfigService.get('DB_PASSWORD'),
  database: ConfigService.get('DATABASE'),
  entities: entities,
  logging: false,
} as TypeOrmModuleOptions;
 */
