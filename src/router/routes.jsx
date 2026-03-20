import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import Dashboard from "../layouts/Dashboard";
import Overview from "../pages/Overview";
import Agents from "../pages/Agents";
import Analytics from "../pages/Analytics";
import Team from "../pages/Team";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        // 1. THE FIX: Handle the empty root route
        path: '/',
        element: <Navigate to='/dashboard/overview' replace />
    },
    {
        path: '/dashboard',
        Component: Dashboard,
        children: [
            {
                index: true,
                element: <Navigate to='overview' replace />
            },
            {
                path: 'overview',
                Component: Overview,
            },
            {
                path: 'agents',
                Component: Agents
            },
            {
                path: 'analytics',
                Component: Analytics
            },
            {
                path: 'team',
                Component: Team
            },
            {
                path: 'settings',
                Component: Settings
            },
            {
                path: '*',
                Component: NotFound
            }
        ]
    },
]);
