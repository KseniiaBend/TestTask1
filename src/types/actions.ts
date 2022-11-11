export type defaultAction = {
  type: string;
  payload: any;
};

export type errorAction = {
  type: string;
  hasError: boolean;
  errorStatus: string;
};
