import React, { useEffect, useRef, useState } from 'react';
import useHandleClickOutside from '../hooks/useHandleClickOutSide';
import '../index.css';
var SelectField = function (props) {
    var _a;
    var hoverInfo = props.hoverInfo, className = props.className, _b = props.isTableMode, isTableMode = _b === void 0 ? false : _b, btnClassName = props.btnClassName, _c = props.pending, pending = _c === void 0 ? false : _c, name = props.name, defaultValue = props.defaultValue, parentClassName = props.parentClassName, fallBackPath = props.fallBackPath, style = props.style, onChange = props.onChange, isDisabled = props.isDisabled, isEditable = props.isEditable, placeholder = props.placeholder, labelName = props.labelName, _d = props.options, options = _d === void 0 ? [] : _d, children = props.children, handleRouteClick = props.handleRouteClick, _e = props.notFoundText, notFoundText = _e === void 0 ? 'No Options are available' : _e;
    var _f = useState(options), filteredOptions = _f[0], setFilteredOptions = _f[1];
    var _g = useState(false), toggleOptions = _g[0], setToggleOptions = _g[1];
    var _h = useState(''), fieldValue = _h[0], setFieldValue = _h[1];
    useEffect(function () {
        var _a;
        if (defaultValue) {
            var defaultValueID = (_a = options.filter(function (idD) { return idD.value === defaultValue; })[0]) === null || _a === void 0 ? void 0 : _a.value;
            setFieldValue && setFieldValue(defaultValueID);
        }
    }, [defaultValue, options]);
    var ref = useRef(null);
    useHandleClickOutside(ref, function () { return setToggleOptions(false); });
    useEffect(function () {
        setFilteredOptions(options);
    }, [options, options.length]);
    useEffect(function () {
        if (fieldValue) {
            onChange(options.filter(function (item) { return item.label === fieldValue; })[0]);
        }
    }, [fieldValue, onChange, options]);
    if (isEditable) {
        return null;
    }
    return (React.createElement("div", { className: "".concat(parentClassName, " ").concat(isTableMode ? 'isTableMode' : 'notTableMode') },
        React.createElement("label", { className: "labelClass", htmlFor: name },
            labelName,
            hoverInfo &&
                React.createElement("div", { "data-titleinfo": hoverInfo, className: 'hoverInfo' }, "?")),
        React.createElement("div", { style: { position: 'relative' } },
            React.createElement("div", { className: 'mainDiv' },
                pending ?
                    React.createElement("p", { className: 'loading-div' }, "Loading...")
                    :
                        React.createElement(React.Fragment, null,
                            React.createElement("input", { style: style, name: 'input', className: "inputClass ".concat(isDisabled && 'disabledInput', " ").concat(isTableMode && 'tableMargin', " ").concat(className), value: ((_a = options.filter(function (item) { return item.value === fieldValue; })[0]) === null || _a === void 0 ? void 0 : _a.label) || fieldValue, placeholder: placeholder || 'Select', disabled: isDisabled, onClick: function () { return setToggleOptions(true); }, autoComplete: 'off', onChange: function (e) {
                                    var _a, _b;
                                    if ((_a = options.filter(function (item) { return item.label === e.target.value; })[0]) === null || _a === void 0 ? void 0 : _a.label) {
                                        setFieldValue((_b = options.filter(function (item) { return item.label === e.target.value; })[0]) === null || _b === void 0 ? void 0 : _b.value);
                                    }
                                    else {
                                        setFieldValue(e.target.value);
                                    }
                                    if (e.target.value) {
                                        var filterValues = options.filter(function (item) { var _a; return (_a = item.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(e.target.value.toLowerCase()); });
                                        setFilteredOptions(filterValues);
                                    }
                                    else {
                                        setFilteredOptions(options);
                                    }
                                }, type: "text" }),
                            React.createElement("span", { role: 'button', onClick: function () { return setToggleOptions(!toggleOptions); } },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", style: { height: 14, position: 'absolute', right: 8, top: 10 } },
                                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })))),
                toggleOptions && !isDisabled &&
                    React.createElement("div", { ref: ref, className: "mainOptionDiv fromTop" },
                        filteredOptions.map(function (option) { return (React.createElement("button", { key: option.value, type: 'button', onClick: function () {
                                setToggleOptions(false);
                                setFieldValue(option.value);
                            }, className: "buttonClass ".concat(btnClassName) }, option.label)); }),
                        filteredOptions.length === 0 &&
                            React.createElement("button", { type: 'button', className: 'buttonClass' },
                                React.createElement("span", null, notFoundText),
                                fallBackPath && options.length === 0 &&
                                    React.createElement("span", { role: 'button', onClick: handleRouteClick, className: "".concat(btnClassName, " linkClass") }, labelName))))),
        children));
};
export default SelectField;
//# sourceMappingURL=Selectfield.js.map