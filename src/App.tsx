import React, { useState } from 'react';
import SelectField from './components/Selectfield';

function App() {
    const [val, setVal] = useState('');

    return (


        <SelectField labelName='Foods' name='haha' fieldValue={val} options={[
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
