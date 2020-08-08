export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHashs(payload: string, hashToCompare: string): Promise<boolean>;
}
