
interface RepositoriesInitialState  {
    loading: boolean,
    error: boolean | null,
    data: string[]
}

interface Action{
    type: string,
    payload: any,
}


const reducer = (state : RepositoriesInitialState, action: Action) : RepositoriesInitialState => {
    switch (action.type) {
        case "searchRepositories":
            return {loading:true, error: null, data:[]}
        case "searchRepositories_success":
            return{loading: false, error: null, data:action.payload}
        case "searchRepositories_failure":
            return{loading:false,error: action.payload,data:[]}
        default:
            return state;
    }



}

export default reducer;