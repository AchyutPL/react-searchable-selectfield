import React, { useEffect } from 'react';

const useHandleClickOutside = (ref: React.RefObject<HTMLDivElement>, callBackFn?: any) => {
    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            //function
            if (callBackFn) {
                callBackFn();
            }
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return handleClickOutside;
};

export default useHandleClickOutside;