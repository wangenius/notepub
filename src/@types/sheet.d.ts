interface Time {
  create: string;
  modify: string;
}

interface Cabin {
  cartons: Carton[];
}

interface Wrap {
  name: string;
  path: string;
  time: Time;
  sub: Wrap[];
  sheets: Sheet[];
}

interface Carton {
  name: string;
  path: string;
  time: Time;
  wraps: Wrap[];
  info: {
    common?: {
      tags?: string[];
      description?: string;
      cover?: string;
    };
  } | null;
}

interface Sheet {
  name: string;
  path: string;
  time: Time;
}
