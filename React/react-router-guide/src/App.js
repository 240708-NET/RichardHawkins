import React from "react";
import { createBrowserRouter, RouterProvider, useRouteError, Outlet, Link } from "react-router-dom";
import "./index.css"

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact:contactId",
          element: <Contact />,
        },
      ]
    },
  ]
)

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return(
    <div>
      <h1>Oops!</h1>
      <p>Sorry, you found the end of the internet!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

function FakeText() {
  return(
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
}

function NavBar() {
  return(
    <nav>
      <ul>
        <li><Link to="">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

function Home () {
  return(
    <>
      <NavBar />
      <h1>Home</h1>
      <Outlet />
    </>
  );
}

function About () {
  return(
    <>
      <h1>About</h1>
      <FakeText />
    </>
  );
}

function Contact() {
  return(
    <>
      <h1>Contact</h1>
      <FakeText />
    </>
  );
}