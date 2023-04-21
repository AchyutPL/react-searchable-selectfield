import React, { useState } from 'react';
import SelectField from './components/Selectfield';

function App() {
    const [selecteData, setSelecteData] = useState({});

    const onChange = (data: { label: string, value: string }) => {
        setSelecteData(data);
    }
    console.log(selecteData);

    return (
        <SelectField
            labelName='Foods'
            name='example'
            onChange={onChange}
            options={[
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
            ]}
        />
    )
}

export default App
