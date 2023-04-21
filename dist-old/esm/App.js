import React, { useState } from 'react';
import SelectField from './components/Selectfield';
function App() {
    var _a = useState({}), selecteData = _a[0], setSelecteData = _a[1];
    var onChange = function (data) {
        setSelecteData(data);
    };
    console.log(selecteData);
    return (React.createElement(SelectField, { labelName: 'Foods', name: 'example', onChange: onChange, options: [
            {
                label: 'test',
                value: 'test'
            },
            {
                label: 'man',
                value: 'man'
            },
            {
                label: 'ran',
                value: 'ran'
            },
        ] }));
}
export default App;
//# sourceMappingURL=App.js.map