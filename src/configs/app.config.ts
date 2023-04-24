import { registerAs } from '@nestjs/config';

export interface AppConfig {
  port: number;
}

export const APP_CONFIG_KEY = 'app';

export default registerAs(
  APP_CONFIG_KEY,
  (): AppConfig => ({
    port: parseInt(process.env.PORT, 10) || 3000,
  }),
);
