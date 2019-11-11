import {createStandardAction} from "typesafe-actions";
import {Item} from "./types";


const itemActions = {
    add: createStandardAction('item/add')<Item>(),
    remove: createStandardAction('item/remove')<string>(),

    requests: {
        getAllItems: createStandardAction('item/getAll')
    }
};

export default itemActions;