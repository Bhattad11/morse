import React from "react";
import "../../screens/Dashboard/index.css";

export default function TrackerBoard() {
  return (
    <div className="tracker-board">
      <div className="board-header">Issues</div>
      <div className="kanban">
        <div className="column">
          <h3>Backlog</h3>
          <div className="card">Cluster Monitoring</div>
        </div>
        <div className="column">
          <h3>To Do</h3>
          <div className="card">Sales Planning</div>
        </div>
        <div className="column">
          <h3>In Progress</h3>
          <div className="card">Customer Interview</div>
        </div>
      </div>
    </div>
  );
}
