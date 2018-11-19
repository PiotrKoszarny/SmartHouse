import { IAppState } from './iAppState';
import { INIT_ROOM_COLLECTION } from './actions';
import { tassign } from 'tassign';
export const INITIAL_STATE: IAppState = {
    allRoom: []
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INIT_ROOM_COLLECTION:
            return tassign(state, {
                allRoom: action.allRoom
            });
        default:
            break;
    }
    return state;
}
