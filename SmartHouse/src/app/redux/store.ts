import { IAppState } from './iAppState';
import { KITCHEN_CHANGE_LED } from './actions';
import { tassign } from 'tassign';
import { Room } from '../model/room';
export const INITIAL_STATE: IAppState = {
    kitchen: {
        Id: 'kitchen',
        LedStatus: 0,
        TempStatus: 0
    }
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case KITCHEN_CHANGE_LED:
            return tassign(state, {
                kitchen: action.kitchen
            });
        case KITCHEN_CHANGE_LED:
            return tassign(state, {
                kitchen: action.kitchen.LedStatus
            });
        default:
            break;
    }
    return state;
}
