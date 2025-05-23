import React, { useEffect, useState } from "react";
import db from "../../db/db";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import './conatctNotificationList.css'
export default function ContactNotificationList() {
  const [contacts, setContacts] = useState([]);
  const[key,setKey]=useState('')
  const[isShowData,setIsShowData]=useState(true)
  const finalKey="8602308781"
  const fetchContacts = async () => {
    const allContacts = await db.contacts.toArray();
    setContacts(allContacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  const exportData = () => {
    if (contacts.length === 0) return;

    const worksheetData = contacts.map(({ id, timestamp, ...rest }) => ({
      ...rest,
      SubmittedAt: new Date(timestamp).toLocaleString(),
    }));

    // Create worksheet from data
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    // Bold header cells
    const headerKeys = Object.keys(worksheetData[0] || {});
    headerKeys.forEach((key, index) => {
      const cellRef = XLSX.utils.encode_cell({ r: 0, c: index });
      if (!worksheet[cellRef]) return;
      worksheet[cellRef].s = {
        font: {
          bold: true,
        },
      };
    });

    // Create workbook and append the styled worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    // Write workbook and export
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true, // required for styles to apply
    });

    const dataBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(dataBlob, "contacts_export.xlsx");
  };
  const clearDB = async () => {
    await db.contacts.clear();
    setContacts([]);
    alert("All contacts cleared from database!");
  };
  const handleCheck = () => {
    if (finalKey === key) {
      localStorage.setItem("secretKey", key);
      setIsShowData(false);
      alert("Key Matched");
    } else {
      alert("Invalid key!");
      setIsShowData(true)
    }
  };
useEffect(()=>{
},[isShowData])
  return (
    <>
  { isShowData? 
  <div style={{flex:1,height:'100vh',
  justifyContent:'center',alignItems:'center',
  display:'flex'
  }}>
  <input
    type="number"
    placeholder="Enter Your Secret Key"
    value={key}
    onChange={(e) => setKey(e.target.value)}
    style={inputStyle}
  />
  
  <button
    title="Submit"
    onClick={handleCheck}
    style={buttonStyle}
  >
    Submit
  </button>
</div>
    :
    <div style={{ padding: 20 }}>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "flex-end",
          gap: 10, // optional: space between buttons
        }}
      >
        <button
          onClick={exportData}
          disabled={contacts.length === 0}
          style={{ marginRight: 10, padding: "8px 16px" }}
        >
          Export Data
        </button>

        <button
          onClick={clearDB}
          disabled={contacts.length === 0}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "8px 16px",
          }}
        >
          Clear Database
        </button>
      </div>
      <h2>Saved Contacts</h2>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Surname</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Address</th>
              <th style={thStyle}>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td style={tdStyle}>{contact.name}</td>
                <td style={tdStyle}>{contact.surname}</td>
                <td style={tdStyle}>{contact.email}</td>
                <td style={tdStyle}>{contact.phone}</td>
                <td style={tdStyle}>{contact.address}</td>
                <td style={tdStyle}>
                  {new Date(contact.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>}

    </>
  );
}

const thStyle = {
  borderBottom: "2px solid #ddd",
  padding: "10px",
};

const tdStyle = {
  borderBottom: "1px solid #ddd",
  padding: "10px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginRight: "10px",
  outline: "none",
  width: "250px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
