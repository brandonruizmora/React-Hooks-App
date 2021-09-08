import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setTimeout(() => {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }, 3000);
                } else {
                    console.log('setState no se llamo');
                }
            });

    }, [url]);

    return state;

}
