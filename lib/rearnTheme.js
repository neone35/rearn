import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  purple500, purple800,
  purple200,
  grey300,
  cyan400, cyan200, cyan500,
  green800,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import { fade } from 'material-ui/utils/colorManipulator';

const rearnTheme = getMuiTheme({
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: purple800,
    primary2Color: purple500,
    primary3Color: purple200,
    accent1Color: cyan200,
    accent2Color: cyan400,
    accent3Color: green800,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});

export default rearnTheme;
