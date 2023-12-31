import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic',
  webDir: '../../dist/apps/ionic',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
