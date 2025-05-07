import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home.js"
import {Refine} from "@refinedev/core"
import { customDataProvider } from "../providers/data/fetchdata.js";
import { resources } from "../config/resources.js";
import AllPost from "../routes/AllPost.js";
import Post from "../routes/Post.js";

import { ConfigProvider } from "antd"
import { authProvider } from "../providers/auth/auth-provider.js";
import { Login } from "../routes/Login.js";
export function App() {
  return (
      <ConfigProvider>
      
      <Refine dataProvider={customDataProvider}
        resources={resources}
        authProvider={authProvider}
      >
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
           <Route path="/companies" element={<AllPost />} />
        <Route path="/post" element={<Post />} />

            </Routes> 
        </Refine>
</ConfigProvider>
  );
}

export default App;
