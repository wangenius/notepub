export interface Time {
  create: string;
  modify: string;
}

export interface Cabin {
  cartons: Carton[];
}

export interface Wrap {
  name: string;
  path: string;
  time: Time;
  sub: Wrap[];
  sheets: Sheet[];
}

export interface Carton {
  name: string;
  path: string;
  time: Time;
  wraps: Wrap[];
  info: {
    common?: {
      tags?: string[];
      description?: string;
    };
  } | null;
}

export interface Sheet {
  name: string;
  path: string;
  time: Time;
}
