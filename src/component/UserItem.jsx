import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="list">
      <ul>
        <li>"id":{user.id},</li>
        <li>"Name":"{user.name}",</li>
        <li>"UserName":"{user.username}",</li>
        <li>"Email":"{user.email}",</li>
        <li>"Adress":</li>
        <li>"street":"{user.address.street}",</li>
        <li> "suite":"{user.address.suite}",</li>
        <li>"city":"{user.address.city}",</li>
        <li> "Zipcode":"{user.address.zipcode}",</li>
        <li>"Phone":"{user.phone}",</li>
        <li>"website":"{user.website}",</li>
        <li>"company":</li>
        <li>" name":"{user.company.name}",</li>
        <li>" catchPhrase":"{user.company.catchPhrase}",</li>
        <li>" bs":"{user.company.bs}",</li>
      </ul>
    </div>
  );
};

export default UserItem;
