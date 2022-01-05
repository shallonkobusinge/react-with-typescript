import ReactDOM from 'react-dom';
import Input from './ref/Input';
import { store } from './store';
import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h2>Search For a package</h2>
                <RepositoriesList></RepositoriesList>
            </Provider>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
