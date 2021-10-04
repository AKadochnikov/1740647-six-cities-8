import Main from "../main/main";
import {CSSProperties} from "react";

type AppProps = {
  displayStyle: CSSProperties;
  tabIndex: number;
  spanWidth80: CSSProperties;
  spanWidth100: CSSProperties;
}

function App ({displayStyle, tabIndex, spanWidth80, spanWidth100}: AppProps): JSX.Element {
  return  (<Main displayStyle={displayStyle}
                 tabIndex={tabIndex}
                 spanWidth80={spanWidth80}
                 spanWidth100={spanWidth100}
  />);
}

export default App;
