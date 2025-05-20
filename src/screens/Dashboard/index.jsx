import React from "react";
import Header from "../../components/Header";
import Topbar from "../../components/Topbar";
import TrackerBoard from "../../components/TrackerBoard";
import Inbox from "../../components/Inbox";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0f0f10] text-white">
      <Header />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto p-4">
            <TrackerBoard />
          </div>
          <div className="w-[350px] border-l border-gray-800 overflow-auto">
            <Inbox />
          </div>
        </div>
      </div>
    </div>
  );
}