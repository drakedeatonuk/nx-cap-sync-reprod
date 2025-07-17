import { CapacitorConfig } from "@capacitor/cli";

// some evocations of this script are from the root of the monorepo, some from the app folder,
// so we need to check the path to determine if we're in the app folder
//@ts-ignore
const path = __dirname.split("/").pop() !== "app" ? `${ __dirname }/apps/app` : __dirname;

const config: CapacitorConfig = {
  appId: "uk.co.reprod.www",
  appName: "Reprod",
  webDir: `${ path }/../../dist/apps/app/www`,
};

export default config;
