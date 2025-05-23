// db.js
import Dexie from "dexie";

const db = new Dexie("ContactUsDB");
db.version(1).stores({
  contacts: "++id,name,surname,email,phone,address,timestamp",
});

export default db;
