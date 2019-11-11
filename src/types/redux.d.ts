import {StateType, ActionType, action} from 'typesafe-actions';
import actions from '../ducks/actions';
export type RootAction = ActionType<typeof actions>;


declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
}