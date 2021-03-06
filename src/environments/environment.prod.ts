// `.env.ts` is generated by the `npm run env` command
import env from '@env/.env';

export const environment = {
  production: true,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};
