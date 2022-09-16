import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setpeople]=useState(data)
  return <main>
    <section className='container'>
      <h3 style={{textAlign:'center',fontWeight:'bold'}}>Hi</h3>
      <h3>We have {people.length} Birthdays Today</h3>
      <List people={people}/>
      <button onClick={()=> setpeople([])}>Clear all</button>
    </section>
   </main>;
}

export default App;
