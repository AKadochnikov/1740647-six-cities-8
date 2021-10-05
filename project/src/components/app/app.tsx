import Main from "../main/main";

type AppProps = {
  count_stay: number;
}

function App ({count_stay}: AppProps): JSX.Element {
  return  (<Main countStay={count_stay}/>);
}

export default App;
