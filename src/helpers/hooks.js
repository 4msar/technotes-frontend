import { useCallback, useState } from 'react';
import { useAuth } from '../store';
import ApiService from './ApiService';

export const useBooks = (initial = [], filter = false) => {
    const [items, setItems] = useState(initial);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const { loggedIn } = useAuth();

    const fetchItems = useCallback(async () => {
        toggleLoading(true);
        try {
            const data = await ApiService.getBooks();
            const fetchedItems = [...data];
            const filteredBooks = fetchedItems.filter((item) => {
                if (item.private) {
                    return loggedIn && item.published;
                }
                return item.published;
            });
            if (filter) {
                setItems(filteredBooks);
            } else {
                setItems(fetchedItems);
            }
            toggleLoading(false);
            setError(fetchedItems.length === 0);
        } catch {
            console.log('[Books] - Something went wrong.');
            setError(true);
            toggleLoading(false);
        }
    }, [loggedIn, filter]);

    return {
        items,
        error,
        loading,
        fetchItems,
    };
};

export const useBook = (initial = {}, filter = false) => {
    const [item, setItem] = useState(initial);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const { loggedIn } = useAuth();

    const fetchItem = useCallback(
        async (ID) => {
            toggleLoading(true);
            try {
                const data = await ApiService.getBook(ID);
                const isPrivate = data.private;
                if (filter) {
                    if (data.published) {
                        if (isPrivate && loggedIn) {
                            setItem({ ...data });
                        } else if (!isPrivate) {
                            setItem({ ...data });
                        } else {
                            setError(true);
                        }
                    } else {
                        setError(true);
                    }
                } else {
                    setItem({ ...data });
                }

                toggleLoading(false);
            } catch {
                console.log('[Book] - Something went wrong.');
                setError(true);
                toggleLoading(false);
            }
        },
        [filter, loggedIn]
    );

    return {
        item,
        error,
        loading,
        fetchItem,
    };
};

export default {
    useBooks,
    useBook,
};
