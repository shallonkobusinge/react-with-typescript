import React from 'react';
import { useActions } from '../hooks/useActions';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
    const [names, setNames] = React.useState('');
    const { searchResults } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repository);


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchResults(names);

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={names} onChange={(e) => setNames(e.target.value)}></input>
                <button>Search</button>
                {error && <h3>{error}</h3>}
                {loading ? <h3>Loading.....</h3> : data.map((item: string) => (
                    <p>{item}</p>
                ))}
            </form>
        </div>
    )

}

export default RepositoriesList;