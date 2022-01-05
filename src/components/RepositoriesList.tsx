import React from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [names, setNames] = React.useState('');
    const { searchResults } = useActions();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchResults(names);

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={names} onChange={(e) => setNames(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )

}

export default RepositoriesList;