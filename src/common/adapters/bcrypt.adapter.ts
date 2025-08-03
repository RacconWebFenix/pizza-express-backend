import { IHasher } from '../interfaces/hasher.interface';
import * as bcrypt from 'bcryptjs';

export class BcryptAdapter implements IHasher {
  constructor(private readonly saltRounds: number = 10) {}

  async hash(value: string): Promise<string> {
    return bcrypt.hash(value, this.saltRounds);
  }

  async compare(value: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(value, hashed);
  }
}
