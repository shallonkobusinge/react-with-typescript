import { ActionTypes } from '../../store/action-types/index'
export interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORIES,

}
export interface SearchRepositoriesSuccessAction {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]

}

export interface SearchRepositoriesFailureAction {
    type: ActionTypes.SEARCH_REPOSITORIES_FAILURE,
    payload: string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesFailureAction;
