"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_typography_1 = require("react-native-typography");
var headline = react_native_typography_1.material.headline, title = react_native_typography_1.material.title, subheading = react_native_typography_1.material.subheading, body2 = react_native_typography_1.material.body2, body1 = react_native_typography_1.material.body1, caption = react_native_typography_1.material.caption;
exports.Typography = {
    headline: headline,
    title: title,
    subheading: subheading,
    bodyMedium: body2,
    bodyRegular: body1,
    caption: caption
};
var _a = react_native_1.Platform.OS === "ios" ? react_native_typography_1.sanFranciscoWeights : react_native_typography_1.robotoWeights, thin = _a.thin, light = _a.light, regular = _a.regular, medium = _a.medium;
exports.FontWeights = { thin: thin, light: light, regular: regular, medium: medium };
