import React from 'react';

const RepositoriesList: React.FC = () => {
    const [names, setNames] = React.useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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