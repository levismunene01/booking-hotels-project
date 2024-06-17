import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import Register from "./Register";
import Login from "./Login";

function Routes() {
  return (
    <RouterProvider router={createBrowserRouter()}>
      <div>
        <Route path="/register" component={Register} />

        <Route path="/login" 
        component={Login} />
      </div>
    </RouterProvider>
  );
}

export default Routes;
