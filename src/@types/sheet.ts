export interface Time {
  create: string;
  modify: string;
}

export interface Collection {
  name: string;
  path: string;
  time: Time;
  sub: Collection[];
  sheets: Sheet[];
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
