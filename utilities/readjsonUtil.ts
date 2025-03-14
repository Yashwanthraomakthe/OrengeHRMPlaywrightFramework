import { env } from './env';

export class JsonUtil {
  static getCredentials() {
    return Credential;
  }

  static getUrl() {
    return env.url;
  }
}