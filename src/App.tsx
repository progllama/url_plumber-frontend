import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Page } from "./components/page";
import { NoContent } from "./components/noContent";
import { Folder, Folders, NewFolder, EditFolder } from "./components/folders";
import { Links, NewLink, EditLink } from "./components/links";
import { Redirect } from "./components/redirect";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Redirect path={"/folders"} />} />
          <Route path="folders">
            <Route index element={<Folders />} />
            <Route path="new" element={<NewFolder />} />
            <Route path=":folderName">
              <Route index element={<Folder />} />
              <Route path="edit" element={<EditFolder />} />
              <Route path="links">
                <Route index element={<Links />} />
                <Route path="new" element={<NewLink />} />
                <Route path=":linkName">
                  <Route path="edit" element={<EditLink />} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NoContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
