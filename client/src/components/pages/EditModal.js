import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateUser } from "../../redux/actions";
import { useParams } from 'react-router-dom';

const EditModal = () => {
  const { id } = useParams(); // Get the 'id' from the URL

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    dispatch(fetchUser(id)); // Fetch user data using the 'id'
  }, [dispatch, id]);

  useEffect(() => {
    console.log(user)
    setUserData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(updateUser(id, userData)); // Update user data using the 'id'
  };

  return (
    <div>
      <h1>Edit User</h1>
      {error && <p>Error: {error.message}</p>}
      <form>
        <input
          type="text"
          name="name"
          value={userData.name || ""}
          onChange={handleInputChange}
        />
        {/* Add more input fields for other user properties */}
        <button type="button" onClick={handleSubmit}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditModal;
