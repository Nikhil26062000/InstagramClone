import React from 'react'
import Footer from './Footer'
import { signOut } from 'firebase/auth';
import { auth } from './utils/firebase';

const Home = () => {
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div>
        <h2>This is Home Page</h2>
        <button
                  className="py-4 text-center text-sm w-full hover:underline cursor-pointer font-semibold"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
        
        <Footer/>
    </div>
  )
}

export default Home