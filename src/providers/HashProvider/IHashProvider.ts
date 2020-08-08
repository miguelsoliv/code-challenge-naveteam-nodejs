export default interface IHashProvider {
  generateHash(nonHashedString: string): Promise<string>;
  compareHashs(nonHashedString: string, hashedString: string): Promise<boolean>;
}
