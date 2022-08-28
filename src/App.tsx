import './App.css';
import Page from "./components/page"

const BASE_PAGE_COLOR = "bg-slate-400";
const BASE_WIDTH = "w-screen";
const BASE_HEIGHT = "h-screen";


function App(): JSX.Element {
  const style = [BASE_PAGE_COLOR, BASE_WIDTH, BASE_HEIGHT].join(" ")
  return (
    <div className={style}>
      <Page />
    </div >
  );
}

export default App;
