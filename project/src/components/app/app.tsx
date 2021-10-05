import Main from '../main/main';

type AppProps = {
  countStay: number;
}

function App ({countStay}: AppProps): JSX.Element {
  return  (<Main countStay={countStay}/>);
}

export default App;
