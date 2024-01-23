export enum RoutesApi {
  "sheet",
  "collection",
  "portfolio",
}

export type RoutesKey = keyof typeof RoutesApi;

export const RoutesList = (Object.keys(RoutesApi) as RoutesKey[]).slice(
  Object.keys(RoutesApi).length / 2,
  Object.keys(RoutesApi).length,
);
export const colors = [
  "#EAE4E9",
  "#FFF1E6",
  "#FDE2E4",
  "#FAD2E1",
  "#E2ECE9",
  "#BEE1E6",
  "#F0EFEB",
  "#DFE7FD",
  "#CDDAFD",
  "#eddcd2",
  "#fff1e6",
  "#fde2e4",
  "#fad2e1",
  "#c5dedd",
  "#dbe7e4",
  "#f0efeb",
  "#d6e2e9",
  "#bcd4e6",
  "#99c1de",
];
