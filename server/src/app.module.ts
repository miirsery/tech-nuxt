import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

const devtoolsModule = DevtoolsModule.register({
  http: process.env.NODE_ENV !== 'production',
})

const configModule = ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })

const typeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    type: 'postgres',
    host: config.get<string>('POSTGRES_HOST'),
    username: config.get<string>('POSTGRES_USER'),
    password: config.get<string>('POSTGRES_PASSWORD'),
    database: config.get<string>('POSTGRES_DB'),
    port: config.get<number>('POSTGRES_PORT'),
    entities: [__dirname + 'dist/**/*.entity{.ts, .js}'],
    synchronize: process.env.NODE_ENV !== 'production',
    autoLoadEntities: true,
    logging: true,
    useUTC: true,
  }),
})

@Module({
  imports: [
    configModule,
    devtoolsModule,

    UsersModule,
  ],
  controllers: [],
  providers: [UsersModule],
})
export class AppModule {}
