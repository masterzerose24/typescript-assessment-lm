import { ActionCreatorsMapObject } from 'redux';
import { AppEvents } from "../events";

type IActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload }
}

export const SetAge = (age: number) => createAction(AppEvents.SET_AGE, age);
export const SetName = (name: string) => createAction(AppEvents.SET_NAME, name);

export const Actions = {
  SetAge,
  SetName,
}

export type IAction = IActionsUnion<typeof Actions>;