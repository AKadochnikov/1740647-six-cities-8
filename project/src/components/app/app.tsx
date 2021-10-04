import Main from "../main/main";
import {CSSProperties} from "react";

type AppProps = {
  displayStyle: CSSProperties;
  tabIndex: number;
  spanWidth80: CSSProperties;
  count_stay: number;
}

function App ({displayStyle, tabIndex, spanWidth80, count_stay}: AppProps): JSX.Element {
  return  (<Main displayStyle={displayStyle}
                 tabIndex={tabIndex}
                 spanWidth80={spanWidth80}
                 countStay={count_stay}
  />);
}

export default App;
