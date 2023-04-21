import React from 'react';
import { useState } from 'react'
import SelectField from './components/Selectfield'

function App() {
    const [val, setVal] = useState('');

    return (
        <SelectField name='haha' fieldValue={val} options={[
            {
                name: 'test',
                value: 'test'
            },
            {
                name: 'man',
                value: 'man'
            },
            {
                name: 'ran',
                value: 'ran'
            },
        ]}
            setFieldValue={setVal}
        />
    )
}

export default App
