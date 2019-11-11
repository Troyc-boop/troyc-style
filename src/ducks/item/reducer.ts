import {createReducer} from "typesafe-actions";
import itemActions from "./actions";
import {Item} from "./types";
import produce from "immer";



type ItemState = {
    [id: string]: Item
}

const itemReducer = createReducer<ItemState>({})
    .handleAction(itemActions.add, (state, action)=>{
        return produce(state, (draftState)=> {
            draftState[action.payload.id]= action.payload;
        });

    })
    .handleAction(itemActions.remove,(state, action) => {
        return produce(state, (draftState)=>{
            delete draftState[action.payload];
        });
    });

export default itemReducer;