import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  create(cat: any) {
    this.users.push(cat);
  }

  findAll(): any[] {
    return this.users;
  }
}