import { instance } from "./axios";

export namespace api {
  export abstract class collection {
    static prefix = "/collection";
    static renovate = async () => {
      return await instance.get("/collection/renovate");
    };

    static load = async () => {
      return await instance.get("/collection/load");
    };
  }

  export abstract class sheet {
    static load = async (path: string) => {
      return await instance.get("/sheet/get?path=" + path);
    };
  }

  export abstract class log {
    static timeline = async () => {
      return await instance.get("/log/timeline");
    };
  }
}
