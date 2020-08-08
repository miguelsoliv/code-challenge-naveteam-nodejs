import { hash, compare } from 'bcryptjs';

import IHashProvider from './IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, process.env.JWT_SECRET || 8);
  }

  public async compareHashs(
    payload: string,
    hashToCompare: string
  ): Promise<boolean> {
    return compare(payload, hashToCompare);
  }
}

export default BCryptHashProvider;
