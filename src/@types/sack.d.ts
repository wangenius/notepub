interface Sack {
  gadgets: Gadget[];
}

interface Gadget {
  info: {
    common: {
      author: string | null;
      tags: string[] | null;
      url: string | null;
      about: string | null;
      access: boolean | null;
    };
    attachment: {
      download: boolean | null;
      price: null | number;
      url: null | string;
    };
  };
  name: string;
  path: string;
}
