import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from './utils/userSlice';

const Footer = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  
                })
              );
              navigate("/home");
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          });
          return () => unsubscribe();
    },[])
  return (
    <div>
         <div class="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
    <div class="flex space-x-4">
      <a href="#" class="text-gray-500 hover:text-black">About</a>
      <a href="#" class="text-gray-500 hover:text-black">Help</a>
      <a href="#" class="text-gray-500 hover:text-black">Press</a>
      <a href="#" class="text-gray-500 hover:text-black">API</a>
      <a href="#" class="text-gray-500 hover:text-black">Jobs</a>
      <a href="#" class="text-gray-500 hover:text-black">Privacy</a>
      <a href="#" class="text-gray-500 hover:text-black">Terms</a>
      <a href="#" class="text-gray-500 hover:text-black">Locations</a>
      <a href="#" class="text-gray-500 hover:text-black">Top Accounts</a>
      <a href="#" class="text-gray-500 hover:text-black">Hashtags</a>
      <a href="#" class="text-gray-500 hover:text-black">Language</a>
    </div>
    <div class="text-gray-500">
      &copy; 2023 Instagram from Facebook
    </div>
  </div>
    </div>
  )
}

export default Footer