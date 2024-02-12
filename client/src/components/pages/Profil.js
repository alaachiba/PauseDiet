import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserImage } from '../../redux/actions';
import styled from '@emotion/styled';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

// Define a styled component for the profile card
const ProfileCard = styled(Card)`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const ProfileImage = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

function Profil() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('User ID:', user._id);

  // Fetch the user's image when the component mounts or when the user ID changes
  useEffect(() => {
    if (user._id) {
      // Assuming you have the user's ID available in the Redux state
      dispatch(fetchUserImage(user._id));
    }
  }, [dispatch, user._id]); // Add dispatch and user._id as dependencies

  const fullImagePath = `${process.env.REACT_APP_BACKEND_URL}/${user.image}`;
  console.log("path:", fullImagePath)

  return (
    <ProfileCard elevation={3}>
      <CardContent>
        {user.image ? (
          <ProfileImage alt="User Profile" src={fullImagePath} />
        ) : (
          <ProfileImage alt="User Profile" />
        )}
        <Typography variant="h4" gutterBottom>
          {user.name} {user.lastName}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {user.email}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {user.Phone}
        </Typography>
      </CardContent>
    </ProfileCard>
  );
}

export default Profil;
