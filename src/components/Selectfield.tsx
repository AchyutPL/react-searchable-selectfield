/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import useHandleClickOutside from '../hooks/useHandleClickOutSide';
import '../index.css';
import IProps from '../types';


const SelectField = (props: IProps) => {
    const { hoverInfo, className, isTableMode = false, btnClassName, pending = false, name, defaultValue, parentClassName, fallBackPath, style,
        onChange, isDisabled, isEditable, placeholder, labelName, options = [], children, handleRouteClick, notFoundText = 'No Options are available' } = props;

    const [filteredOptions, setFilteredOptions] = useState<IProps['options']>(options);
    const [toggleOptions, setToggleOptions] = useState(false);
    const [fieldValue, setFieldValue] = useState('')

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

    useEffect(() => {
        if (fieldValue) {
            onChange(options.filter(item => item.value === fieldValue)[0])
        }
    }, [fieldValue])


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
                            <>
                                <input
                                    style={style}
                                    name='input'
                                    className={
                                        `inputClass ${isDisabled && 'disabledInput'} ${isTableMode && 'tableMargin'} ${className}`}
                                    value={options.filter(item => item.value === fieldValue)[0]?.label || fieldValue}
                                    placeholder={placeholder || 'Select'}
                                    disabled={isDisabled}
                                    onClick={() => setToggleOptions(true)}
                                    autoComplete='off'
                                    onChange={(e) => {
                                        if (options.filter(item => item.label === e.target.value)[0]?.label) {
                                            setFieldValue(options.filter(item => item.label === e.target.value)[0]?.value)
                                        } else {
                                            setFieldValue(e.target.value);
                                        }

                                        if (e.target.value) {
                                            const filterValues = options.filter(item => item.label?.toLowerCase().includes(e.target.value.toLowerCase()));
                                            setFilteredOptions(filterValues);
                                        } else {
                                            setFilteredOptions(options);
                                        }
                                    }} type="text" />
                                <span role={'button'} onClick={() => setToggleOptions(!toggleOptions)}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        style={{ height: 14, position: 'absolute', right: 8, top: 10 }}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </>

                    }

                    {
                        toggleOptions && !isDisabled &&
                        <div ref={ref} className={`mainOptionDiv fromTop`} >
                            {
                                filteredOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type='button'
                                        onClick={() => {
                                            setToggleOptions(false);
                                            setFieldValue(option.value);
                                        }}
                                        className={`buttonClass ${btnClassName}`}>
                                        {option.label}
                                    </button>
                                ))
                            }
                            {filteredOptions.length === 0 &&
                                <button type='button'
                                    className={'buttonClass'}>
                                    <span>{notFoundText}</span>
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