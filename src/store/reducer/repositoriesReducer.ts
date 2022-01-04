
interface RepositoriesInitialState  {
    loading: boolean,
    error: boolean | null,
    data: string[]
}

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORIES,
    
}
interface SearchRepositoriesSuccessAction{
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]

}

interface SearchRepositoriesFailureAction{
    type: ActionTypes.SEARCH_REPOSITORIES_FAILURE,
    payload: string
}

type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesFailureAction;

enum ActionTypes {
    SEARCH_REPOSITORIES = "searchRepositories",
    SEARCH_REPOSITORIES_SUCCESS = "searchRepositories_success",
    SEARCH_REPOSITORIES_FAILURE = "searchRepositories_failure"
}

const reducer = (state : RepositoriesInitialState, action: Action) : RepositoriesInitialState => {
    switch (action.type) {
        case "searchRepositories":
            return {loading:true, error: null, data:[]}
        case "searchRepositories_success":
            return{loading: false, error: null, data:action.payload}
        case "searchRepositories_failure":
            return{loading:false,error: null,data:[]}
        default:
            return state;
    }



}

export default reducer;