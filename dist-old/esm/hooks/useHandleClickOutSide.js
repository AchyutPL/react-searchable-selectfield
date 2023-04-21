import { useEffect } from 'react';
var useHandleClickOutside = function (ref, callBackFn) {
    var handleClickOutside = function (e) {
        if (ref.current && !ref.current.contains(e.target)) {
            //function
            if (callBackFn) {
                callBackFn();
            }
        }
    };
    useEffect(function () {
        document.addEventListener('click', handleClickOutside, true);
        return function () {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return handleClickOutside;
};
export default useHandleClickOutside;
//# sourceMappingURL=useHandleClickOutSide.js.map