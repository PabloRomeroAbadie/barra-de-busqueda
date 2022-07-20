import React, {useState, useMemo} from 'react';

const Results = ({items, onItemSelected, query, onResultsCalculated}) => {
    const [results, setResults] = useState([]);
    const filteredItems = findMatch();

    function findMatch(items, query) {
        console.log("hola")
    }
    return (
        <div>
            hola
        </div>
    );
};

export default Results;