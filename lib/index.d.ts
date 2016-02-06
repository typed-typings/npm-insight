declare class Insight {
  trackingCode: string;
  trackingProvider: string;
  packageName: string;
  packageVersion: string;
  os: string;
  nodeVersion: string;
  appVersion: string;
  config: any;

  optOut: boolean;
  clientId: string;

  constructor (options: Insight.Options);

  track (...args: string[]):void;
  askPermission (msg?: string, cb?: Function): void;
}

declare namespace Insight {
  export interface Options {
    trackingCode: string;
    trackingProvider?: string;
    pkg: {
      name: string;
      version: string;
    }
    config?: any;
  }
}

export = Insight;
