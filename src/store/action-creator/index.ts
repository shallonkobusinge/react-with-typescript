import axios from 'axios';
import {Action} from '../actions/index';
import {ActionTypes} from '../action-types/index';
import { Dispatch} from 'redux';



const searchRepository = () =>({
    type: ActionTypes.SEARCH_REPOSITORIES,
});

const searchRepositorySuccess = (names: string[]) => ({
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
    payload: names
});
const searchRepositoryFailure = (message: Error) =>({
    type: ActionTypes.SEARCH_REPOSITORIES_FAILURE,
    payload: message
});


const searchResults = (term: string) =>{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES,
        })
        
            try{
                const {data} = await axios.get("https://registry.npmjs.org/-/v1/search",{
                    params:{
                        text: term
                    }
                });
                const names = data.objects.map((result : any)=>{
                    return result.package.name
                })
                dispatch({
                    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                    payload: names,
                });
            }
            catch(error){
                dispatch(dispatch({
                    type: ActionTypes.SEARCH_REPOSITORIES_FAILURE,
                    payload: (error as Error).message
                }));
            }

    }

};