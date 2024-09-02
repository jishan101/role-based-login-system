import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}

  public getMongoConfig() {
    const mongodb = {
      uri: `mongodb+srv://${this.configService.get('MONGO_USER')}:${this.configService.get('MONGO_PASSWORD')}@${this.configService.get('MONGO_HOST')}/${this.configService.get('MONGO_DATABASE')}`,
    };

    return mongodb;
  }
}
