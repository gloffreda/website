export interface IReducerAction<T = unknown, Y = unknown> {
  type: T;
  payload: Y;
}
