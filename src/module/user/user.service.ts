import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  private generateHashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  public async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  private async canCreate(username: string): Promise<boolean> {
    const existingUser = await this.findOneByKey('username', username);
    if (existingUser) {
      throw new BadRequestException(
        `Username: '${username}' already exists. Please enter a different username.`,
      );
    }

    return true;
  }

  public async create(body: CreateUserDTO) {
    await this.canCreate(body.username);

    body.password = await this.generateHashPassword(body.password);

    const newUser = new this.userModel(body);

    return newUser.save();
  }

  public findOneByKey(key: string, value: string) {
    return this.userModel.findOne({ [key]: value }).exec();
  }
}
