import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./Components/Layout/RootLayout";
import HelpLayout from "./Components/Layout/HelpLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Help/Faq";
import Contact from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";

const RootRouting = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route index element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={RootRouting} />;
}

export default App;
