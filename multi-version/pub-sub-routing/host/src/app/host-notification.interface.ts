export interface RouterState {
  [k: string]: any;
}

export interface HostNotification {
  url: string;
  state: RouterState;
}
