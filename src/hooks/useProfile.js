import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileData } from '../reducers/profileReducer';
import { displayNotification } from '../reducers/notificationReducer';

/*
Custom hook for keeping track of user profile in the profile and profile/library page.
*/

/* Hook gets the profile data from API backend incase redux doesn't have
cached profile or if cached profile is a wrong profile
*/

const useProfile = (id) => {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      // id from url parameter is of type string, converted to number here
      if (!profile || profile.id !== parseFloat(id)) {
        try {
          dispatch(setProfileData(id));
        }
        catch(err) {
          dispatch(displayNotification({
            message: 'couldnt get users data',
            class: 'error'
          }, 4));
        }
      }
    };

    fetchUser();
  }, [id]);

  return profile;
};

export default useProfile;
