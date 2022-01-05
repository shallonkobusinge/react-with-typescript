import {ActionTypes } from '../action-types/index';
import {Action } from '../actions/index';
interface RepositoriesInitialState  {
    loading: boolean,
    error: boolean | null,
    data: string[]
}
const initialState  = {
    loading: false,
    error: null,
    data: []
}


const reducer = (state : RepositoriesInitialState = initialState, action: Action) : RepositoriesInitialState => {
    switch (action.type) {
        case ActionTypes.SEARCH_REPOSITORIES:
            return {loading:true, error: null, data:[]}
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
            return{loading: false, error: null, data:action.payload}
        case ActionTypes.SEARCH_REPOSITORIES_FAILURE:
            return{loading:false,error: null,data:[]}
        default:
            return state;
    }



}

export default reducer;