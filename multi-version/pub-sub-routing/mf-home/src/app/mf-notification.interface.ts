export interface RouterState {
  [k: string]: any;
}

export interface MfNotification {
  url: string;
  state: RouterState;
}
