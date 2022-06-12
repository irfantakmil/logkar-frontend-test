import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Films from './components/films';
import MainLayout from './hoc/mainLayout';
import Topbar from './components/navbar';
import Characters from './components/characters';
import Planets from './components/planets'

const App = () => {
    return(
        <BrowserRouter>
            <MainLayout>
                <Topbar/>
                <Routes>
                    <Route path='/planets' element={<Planets/>}/>
                    <Route path='/characters' element={<Characters/>}/>
                    <Route path='/films' element={<Films/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default App;