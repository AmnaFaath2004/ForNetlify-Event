import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Naavs from './components/Navvs';
import Footer from './components/Footer';
import planning from './assets/images/planning.webp'
import music from './assets/images/music.avif'
import engagement from './assets/images/engagment.jpeg'
import corporate from './assets/images/corporate.webp'
import college from './assets/images/college.jpg'
import birthday from './assets/images/birthday.webp'
import Home from './pages/home';
import Events from './pages/events';
import EventDetails from './pages/event-details';
import { useState } from 'react';
import Booking from './pages/booking';

function App() {
      
  const events=[
    {
    id: 1,
    name: 'Wedding Planning',
    description:
        'Elegant wedding planning services with venue decoration, catering, photography, and entertainment.',
    price: 50000,
    image: planning
},

{
    id: 2,
    name: 'Corporate Events',
    description:
        'Professional corporate event management for conferences, seminars, product launches, and business meetings.',
    price: 35000,
    image: corporate
},

{
    id: 3,
    name: 'Birthday Celebrations',
    description:
        'Creative birthday party arrangements with themed decorations, games, music, and catering services.',
    price: 15000,
    image: birthday
},

{
    id: 4,
    name: 'Engagement Ceremony',
    description:
        'Memorable engagement event planning with customized décor, lighting, and entertainment options.',
    price: 25000,
    image: engagement 
},

{
    id: 5,
    name: 'Music Concerts',
    description:
        'Complete concert management including stage setup, sound systems, lighting, and crowd coordination.',
    price: 75000,
    image: music
},

{
    id: 6,
    name: 'College Fest',
    description:
        'Exciting college festival management featuring cultural programs, competitions, and celebrity appearances.',
    price: 60000,
    image: college 

  }]

const[cart,setCart]=useState(0)

  return (
    <>
      <BrowserRouter>
      <Naavs cart={cart}/>
      <Routes>
        <Route path='/' element={<Home  events={events}/>}/>
        <Route path='/events' element={<Events events={events}/>}/>
        <Route path='/Event-Details/:id' element={<EventDetails 
        events={events}
        cart={cart}
        setCart={setCart}
        />}/>
        <Route path='/Booking' element={<Booking booking={cart}/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App




