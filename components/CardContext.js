import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext, useEffect } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    const [ultimoId, setUltimoId] = useState(0);

    useEffect(() => {
        const loadCards = async () => {
            try {
                const storedCards = await AsyncStorage.getItem('@cards');
                const storedLastId = await AsyncStorage.getItem('@ultimoId');
                if (storedCards !== null) {
                    setCards(JSON.parse(storedCards));
                }
                if (storedLastId !== null) {
                    setUltimoId(JSON.parse(storedLastId));
                }
            } catch (error) {
                console.error('Erro ao retornar cards', error);
            }
        };

        loadCards();
    }, []);

    const saveCards = async (newCards, newLastId) => {
        try {
            await AsyncStorage.setItem('@cards', JSON.stringify(newCards));
            await AsyncStorage.setItem('@ultimoId', JSON.stringify(newLastId));
        } catch (error) {
            console.error('Erro ao salvar cards', error);
        }
    };

    const addCard = (novoCard) => {
        const card = { id: ultimoId + 1, ...novoCard};
        const newCards = [...cards, card];
        setCards(newCards);
        setUltimoId(ultimoId + 1);
        saveCards(newCards, ultimoId + 1);
    };

    const removeCard = (cardId) => {
        const newCards = cards.filter(card => card.id !== cardId);
        setCards(newCards);
        saveCards(newCards, ultimoId);
    };

    return (
        <CardContext.Provider value={{ cards, addCard, removeCard }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);