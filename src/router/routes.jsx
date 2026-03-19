import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/portfolio',
                Component: Portfolio
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/faq',
                Component: FAQ
            }
        ]
    },
]);
