import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  return (
    <div id="app" className="h-screen">
      <Page />
    </div>
  );
}

function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-16 flex-grow-0 flex-shrink-0">
        <Header />
      </div>
      <div className="w-full h-0 flex-grow flex-shrink">
        <Content />
      </div>
    </div >
  );
}

function Header() {
  const iconStyle = { border: "solid white 1px", padding: "3px", borderRadius: "5px", fontSize: "1.5em" }
  const handleMenu = () => {
    const items = document.getElementsByClassName("nav-item");
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.toggle("hidden");
    };
  };

  return (
    <div className="w-full h-full flex bg-slate-800">
      <div className="flex w-11/12 m-auto gap-5 text-white">
        <div className="font-bold flex-grow text-3xl min-w-max">
          URL🔧Plumber
        </div>
        <div className="nav-item self-end flex-grow-0 min-w-max">
          SignUp
        </div>
        <div className="nav-item self-end flex-grow-0 min-w-max">
          Login
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="order-2 md:order-1 h-16 w-full flex-grow flex-shrink md:h-full md:w-64 md:flex-grow-0 md:flex-shrink-0">
        <Side />
      </div>
      <div className="order-1 md:order-2 h-full md:w-0 md:flex-grow md:flex-shrink">
        <Main />
      </div>
    </div >
  );
}

function Main() {
  return (
    <div className="h-full  bg-black overflow-y-auto">
    </div>
  );
}

function Side() {
  return (
    <div className="h-full text-white bg-slate-800 overflow-y-auto">
      Side
    </div>
  );
}

export default App;
