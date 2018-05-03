import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  purple500, purple800,
  purple200,
  grey300,
  cyan200, cyan500,
  green800,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import { fade } from 'material-ui/utils/colorManipulator';

const rearnTheme = props => getMuiTheme({
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: purple800,
    primary2Color: purple500,
    primary3Color: purple200,
    accent1Color: cyan200,
    accent2Color: '#33869F',
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
  tooltip: {
    color: '#fff',
  },
  appBar: {
    height: 50,
  },
  userAgent: props.source || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36',
});

export default rearnTheme;
