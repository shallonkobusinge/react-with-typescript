import React from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

const RepositoriesList: React.FC = () => {
    const [names, setNames] = React.useState('');
    const { searchResults } = useActions();
    const { data, error, loading } = useSelector((state: any) => state.repository);


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchResults(names);

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={names} onChange={(e) => setNames(e.target.value)}></input>
                <button>Search</button>
                {/* {data.map((item: string) => (
                    <>
                        <h2>{item}</h2>
                    </>
                ))} */}
            </form>
        </div>
    )

}

export default RepositoriesList;