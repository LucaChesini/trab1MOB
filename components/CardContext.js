import React, { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    const [lastId, setLastId] = useState(0);

    const addCard = (novoCard) => {
        const card = { id: lastId + 1, ...novoCard};
        setCards(prevCards => [...prevCards, card]);
        setLastId(prevId => prevId + 1);
    };

    const removeCard = (cardId) => {
        setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    };

    return (
        <CardContext.Provider value={{ cards, addCard, removeCard }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);