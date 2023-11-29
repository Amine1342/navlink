import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const params = useParams();

  const getUsersData = async () => {
    const data = await axios.get(
      `https://dummyjson.com/users/${params.profileId}`
    );
    console.log(data.data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const UserData = params.UserData || {};

  return (
    <div className="container mt-3">
      <div
        className="text-primary mb-3"
        style={{ border: "3px solid blue", paddingLeft: "10px" }}
      >
        <strong>Profile :</strong>
      </div>
      <div
        className="text-danger mb-3"
        style={{ border: "3px solid red", paddingLeft: "10px" }}
      >
        <strong>Profile ID :</strong> {params.profileId}
      </div>
      <div
        className="text-success"
        style={{ border: "3px solid red", paddingLeft: "10px" }}
      >
        <strong>Name :</strong> {params.UserData.name}
      </div>
    </div>
  );
}

export default Profile;
