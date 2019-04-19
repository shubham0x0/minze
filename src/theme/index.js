"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_paper_1 = require("react-native-paper");
var constants_1 = require("./constants");
exports.Theme = constants_1.Theme;
exports.statusbarMargin = constants_1.statusbarMargin;
var Layout_1 = require("./constants/Layout");
exports.Layout = Layout_1["default"];
var styles_1 = require("./styles");
exports.styles = styles_1["default"];
var Typography_1 = require("./Typography");
exports.Typography = Typography_1.Typography;
exports.FontWeights = Typography_1.FontWeights;
var DropDownStyle_1 = require("./DropDownStyle");
exports.DropDownAlertStyles = DropDownStyle_1["default"];
exports.papertheme = __assign({}, react_native_paper_1.DefaultTheme, { roundness: 3, dark: false, colors: {
        primary: constants_1.Theme.blue,
        accent: constants_1.Theme.accent,
        background: constants_1.Theme.background,
        surface: constants_1.Theme.surface,
        text: constants_1.Theme.textDark,
        error: constants_1.Theme.red,
        disabled: constants_1.Theme.disabled,
        placeholder: constants_1.Theme.placeholder,
        backdrop: constants_1.Theme.backdrop
    } });
exports.formtheme = __assign({}, react_native_paper_1.DefaultTheme, { roundness: 1, dark: false, colors: {
        primary: constants_1.Theme.blue,
        accent: constants_1.Theme.accent,
        background: '#fff',
        surface: constants_1.Theme.surface,
        text: constants_1.Theme.textDark,
        error: constants_1.Theme.red,
        disabled: constants_1.Theme.disabled,
        placeholder: constants_1.Theme.placeholder,
        backdrop: constants_1.Theme.backdrop
    } });
