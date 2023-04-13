import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Navbar/Dialogs/Dialogs';
import News from './componets/Navbar/News/News'
import Music from './componets/Navbar/Music/Music'
import Setings from './componets/Navbar/Setings/Setings'
import Friends from './componets/Navbar/Friends/Friends';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = (props) => {

  return (
    <BrowserRouter>

      <div className='app-wrapper'>

        <Header />
        <Navbar State={props.State.NavBarContent}/>


        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/dialogs/*' element={<Dialogs State={props.State.DialogsPage} />} />
            <Route path='/profile' element={<Profile State={props.State.ProfilePage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setings' element={<Setings />} />
            <Route path='/friends' element={<Friends />} />
          </Routes>

        </div>



      </div>



    </BrowserRouter>
  )
}


export default App;
