import { Platform } from "react-native";
import {
  material as MaterialTypography,
  sanFranciscoWeights,
  robotoWeights
} from "react-native-typography";

const {
  headline,
  title,
  subheading,
  body2,
  body1,
  caption
} = MaterialTypography;

export const Typography = {
  headline,
  title,
  subheading,
  bodyMedium: body2,
  bodyRegular: body1,
  caption
};

const { thin, light, regular, medium } =
  Platform.OS === "ios" ? sanFranciscoWeights : robotoWeights;

export const FontWeights = { thin, light, regular, medium };
