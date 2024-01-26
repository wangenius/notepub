import { instance } from "./axios";

export namespace api {
  export abstract class cabin {
    static prefix = "/cabin";
    static renovate = async () => {
      return await instance.get(`${cabin.prefix}/renovate`);
    };

    static load = async () => {
      return await instance.get(`${cabin.prefix}/load`);
    };
  }

  export abstract class sheet {
    static prefix = "/sheet";

    /**
     * @param search_path `/${sheet.path}`
     * @example: load(`/${sack.dirname}/xxx/${sheet.name}`)
     */
    static load = async (search_path: string) => {
      return await instance.get(`${sheet.prefix}/get?path=` + search_path);
    };
  }

  export abstract class sack {
    static prefix = "/sack";

    static load = async () => {
      return await instance.get(`${sack.prefix}/load`);
    };

    static gadget = async (search_path: string) => {
      return await instance.get(`${sheet.prefix}/get?path=` + search_path);
    };
  }

  export abstract class log {
    static timeline = async () => {
      return await instance.get("/log/timeline");
    };
  }
}
