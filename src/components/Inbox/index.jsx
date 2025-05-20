import React from "react";
import "../../screens/Dashboard/index.css";

export default function Inbox() {
  return (
    <div className="inbox">
      <h3 className="inbox-header">Inbox</h3>
      <div className="inbox-list">
        <div className="message">
          <span className="user">Elizabeth Reynolds</span> mentioned you in a page.
        </div>
        <div className="message">
          <span className="user">Kenny Osinski</span> assigned a new issue to you.
        </div>
        <div className="message">
          <span className="user">Billy Christiansen</span> changed status to In Progress.
        </div>
      </div>
    </div>
  );
}
