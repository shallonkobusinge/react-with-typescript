import { combineReducers} from 'redux';
import repositoriesReducer from './repositoriesReducer';


const reducer = combineReducers({
    repository: repositoriesReducer,
})

export default reducer;