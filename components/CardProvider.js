import {createContext, react, useState} from "react";

const CardContext = createContext();

const CardProvider = ({filhos}) => {
    const [data, setData] = useState([]);
    const [lastId, setLastId] = useState(0);

    const addCard = ({novoCard}) => {
        const card = { id: lastId + 1, ...newData};
        setData(prevData => [...prevData, card]);
        setLastId(prevId => prevId + 1);
    };

    return (
        <CardContext.Provider value={{data, addCard}}>
            {filhos}
        </CardContext.Provider>
    );
}