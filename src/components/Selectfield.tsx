import React, { useEffect, useRef, useState } from 'react';
import useHandleClickOutside from '../hooks/useHandleClickOutSide';
import '../index.css';
// import CustomError from './CustomError';
// import DownArrow from '@heroicons/react/24/outline/ChevronDownIcon';
// import { Oval } from 'react-loader-spinner';
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

    fallBackPath?: string
    children?: React.ReactElement
    handleRouteClick?: () => void
    parentClassName?: string
    notFoundText?: string
    style?: React.CSSProperties
}
const SelectField = (props: Props) => {
    const { hoverInfo, className, isTableMode = false, btnClassName, pending = false, name, defaultValue, parentClassName, fallBackPath, style,
        fieldValue, setFieldValue, isDisabled, isEditable, placeholder, labelName, options = [], children, handleRouteClick, notFoundText = 'No Options are available' } = props;

    const [filteredOptions, setFilteredOptions] = useState<Props['options']>(options);
    const [toggleOptions, setToggleOptions] = useState(false);

    useEffect(() => {
        if (defaultValue) {
            const defaultValueID = options.filter(idD => idD.value === defaultValue)[0]?.value;
            setFieldValue(defaultValueID);
        }
    }, []);
    const ref = useRef<HTMLDivElement>(null);

    useHandleClickOutside(ref, () => setToggleOptions(false));

    useEffect(() => {
        setFilteredOptions(options);
    }, [options.length]);

    if (isEditable) {
        return null;
    }
    return (
        <div className={`${parentClassName} ${isTableMode ? 'isTableMode' : 'notTableMode'}`}>
            <label className={`labelClass`} htmlFor={name} >{labelName}
                {
                    hoverInfo &&
                    <div
                        data-titleinfo={hoverInfo}
                        className='hoverInfo'>?</div>
                }
            </label >
            <div style={{ position: 'relative' }}>
                <div className='mainDiv'>
                    {
                        pending ?
                            <p className='loading-div'>Loading...</p>
                            :
                            <input
                                style={style}
                                name='input'
                                className={
                                    `inputClass ${isDisabled && 'disabledInput'} ${isTableMode && 'tableMargin'} ${className}`}
                                value={options.filter(item => item.value === fieldValue)[0]?.name || fieldValue}
                                placeholder={placeholder || 'Select'}
                                disabled={isDisabled}
                                onClick={() => setToggleOptions(true)}
                                autoComplete='off'
                                onChange={(e) => {
                                    if (options.filter(item => item.name === e.target.value)[0]?.name) {
                                        setFieldValue(options.filter(item => item.name === e.target.value)[0]?.value);
                                    } else {
                                        setFieldValue(e.target.value);
                                    }

                                    if (e.target.value) {
                                        const filterValues = options.filter(item => item.name?.toLowerCase().includes(e.target.value.toLowerCase()));
                                        setFilteredOptions(filterValues);
                                    } else {
                                        setFilteredOptions(options);
                                    }
                                }} type="text" />
                    }

                    {
                        toggleOptions && !isDisabled &&
                        <div ref={ref} className={`mainOptionDiv fromTop`} >
                            {
                                filteredOptions.map((option) => (
                                    <button
                                        key={option.value}

                                        type='button' onClick={() => {
                                            setToggleOptions(false);
                                            setFieldValue(option.value);
                                        }}
                                        className={`buttonClass ${btnClassName}`}>
                                        {option.name}
                                    </button>
                                ))
                            }
                            {filteredOptions.length === 0 &&
                                <button type='button'
                                    className={'noOption'}>
                                    <p>{notFoundText}</p>
                                    {
                                        fallBackPath && options.length === 0 &&
                                        <span role={'button'} onClick={handleRouteClick} className={`${btnClassName} linkClass`}>
                                            {labelName}
                                        </span>
                                    }
                                </button>
                            }
                        </div>
                    }

                </div>
                {/* <DownArrow className='h-4 absolute right-3 bottom-[10px]' /> */}
            </div>
            {children}
            {/* <ErrorMessage
                name={name}
                component={CustomError}
            /> */}
        </div >
    );
};

export default SelectField;