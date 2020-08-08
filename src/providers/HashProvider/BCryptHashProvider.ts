import { hash, compare } from 'bcryptjs';

import IHashProvider from './IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(nonHashedString: string): Promise<string> {
    return hash(nonHashedString, 8);
  }

  public async compareHashs(
    nonHashedString: string,
    hashedString: string
  ): Promise<boolean> {
    return compare(nonHashedString, hashedString);
  }
}

export default BCryptHashProvider;
