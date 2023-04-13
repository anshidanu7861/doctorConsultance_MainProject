import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import ColorRingLoader from '../components/lodingSpinners/colorRingLoader';
const UserSignup = lazy(()=> import("../pages/user/userSignup"))
import UserLogin from '../pages/user/userLogin';
import { GoogleOAuthProvider } from '@react-oauth/google'
import LandingPage from '../components/landingPage/landingPage';

// USER ROUTERS
function UserRouter() {
    return (
        <div>
          <Routes>

            <Route exact path='/signup' element={ 
            <Suspense fallback={ <ColorRingLoader /> }>
              <UserSignup />
            </Suspense>}>
            </Route>

            <Route exact path='/login' element={ 
              <Suspense fallback={<ColorRingLoader />}>
              <GoogleOAuthProvider clientId='565435053802-igdbdm16j4q6d29sfuhu5fm88ujkvahu.apps.googleusercontent.com'>
            <UserLogin />
            </GoogleOAuthProvider>
            </Suspense>}>
            </Route>

            <Route exact path='/' element={
            <Suspense fallback={ <ColorRingLoader /> }>
             <LandingPage />
            </Suspense>}>
            </Route>

          </Routes>
        </div>
    )
}

export default UserRouter;