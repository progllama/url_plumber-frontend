import './App.css';

function App() {
  return (
    <div id="app" className="h-screen">
      <ContentContainer />
    </div>
  );
}

function ContentContainer() {
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
  return (
    <div className="w-full h-full">
      Header
    </div >
  );
}

function Content() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="h-full w-64 flex-grow-0 flex-shrink-0">
        <Side />
      </div>
      <div className="h-full w-0 flex-grow flex-shrink">
        <Main />
      </div>
    </div >
  );
}

function Main() {
  return (
    <div className="h-full overflow-scroll">
    </div>
  );
}

function Side() {
  return (
    <div className="h-full overflow-scroll">
    </div>
  );
}

export default App;
