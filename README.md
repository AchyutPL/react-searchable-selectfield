# React Searchable Field - React.js Component

> React Searchable Select Field

## Install

```bash
npm install --save react-searchable-selectfield

or,

yarn add react-searchable-selectfield
```

## Usage

```tsx
import React, { useState } from "react"
import SelectField from "react-searchable-selectfield"
// If css is not being loaded
import 'react-searchable-selectfield/dist/index.css' 

const App = () => {
    const [date, setDate] = useState<string>("");
    
    const options = [
      { value: 'chocolate', name: 'Chocolate' },
      { value: 'strawberry', name: 'Strawberry' },
      { value: 'vanilla', name: 'Vanilla' },
    ];

    return (
        <form>
           <SelectField
             name='haha'
             fieldValue={val}
             options={options}
             setFieldValue={setVal}
            />
        </form>
    )
}

export default App;
```

## Suppported Props:
```
interface Props {
    className?: string;
    btnClassName?: string;
    labelName?: string;
    hoverInfo?: string;
    name: string;
    setFieldValue: React.Dispatch<React.SetStateAction<string>>;
    options: { name: string, value: string }[];
    placeholder?: string
    fieldValue: string;
    isEditable?: boolean
    pending?: boolean;
    defaultValue?: string
    isTableMode?: boolean
    isDisabled?: boolean
    detailValues?: any[]
    fallBackPath?: string
    children?: React.ReactElement
    handleRouteClick?: () => void
    mainClassName?: string
}
```

## License

ISC © [https://github.com/AchyutPL](https://github.com/AchyutPL)
