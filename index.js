import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import NewContactForm from "./components/NewContactForm";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ContactList from "./components/ContactList";
import Contact from "./components/Contact";

ReactDOM.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />} />
  <Route path="ContactList" element={<ContactList/>}/>
  <Route path="Contact" element={<Contact/>}/>
  <Route path="NewContactForm" element={<NewContactForm/>}/>
</Routes>,
</BrowserRouter>,
 document.getElementById("root"));
