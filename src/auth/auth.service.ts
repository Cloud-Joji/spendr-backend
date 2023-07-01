import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateApiKey(apiKey: string) {
    const apiKeys: string[] = [process.env.API_KEY];
    return apiKeys.find((key) => apiKey == key);
  }
}
