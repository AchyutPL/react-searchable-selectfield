import React, { useState } from 'react';
import SelectField from './components/Selectfield';

function App() {
    const [selecteData, setSelecteData] = useState({});

    const onChange = (data: { label: string, value: string }) => {
        // setSelecteData(data);

    }
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    console.log(selecteData);

    return (
        <SelectField
            labelName='Foods'
            name='example'
            onChange={onChange}
            options={options}
        />
    )
}

export default App
