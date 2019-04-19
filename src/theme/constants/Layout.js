"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
exports["default"] = {
    window: {
        width: width,
        height: height
    },
    isSmallDevice: width < 375
};
