import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ContactPicker = ({ contacts, onChange, contact }) => {
  let options = contacts.map((contact, index) => (
    <option key={uuidv4()} value={contact.name}>
      {contact.name}
    </option>
  ));
  return (
    <select value={contact} onChange={onChange} required>
      <option value="">Select contact</option>
      {options}
    </select>
  );
};
