import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./dashboard.scss";
import DataChart from "../../components/datachart/datachart";
import ContentGrid from "../../shared-components/content-grid/content-grid";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="aside-bar">
        <aside>
          <Navbar />
        </aside>
      </div>
      <div className="content-bar">
        <Sidebar />
        <DataChart />
        <ContentGrid />
      </div>
    </div>
  );
};

export default Dashboard;
