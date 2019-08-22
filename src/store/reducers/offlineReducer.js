import { ADD_ACTION_TO_ARRAY, REMOVE_ACTION_FROM_ARRAY } from '../actions/actionType'

const initialState = {
    actionsList: [],
}
export default offlineReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACTION_TO_ARRAY: {
            return { ...state, actionsList: [...state.actionsList, action.payload] }
        }
        case REMOVE_ACTION_FROM_ARRAY: {
            var rest=state.actionsList.filter((item,index) => index !=0)

            return {
                ...state, actionsList:rest
            }
        }
        default:
            {
                return state;
            }

    }
}