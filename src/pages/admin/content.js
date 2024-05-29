import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Sidebar from "./sidebar";

export default function Content ({children: body}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navigation />
        <main className="flex-1 p-4">
         {body}
        </main>
      </div>
    </div>
  );
};
