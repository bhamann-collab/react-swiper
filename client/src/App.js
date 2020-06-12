import React from 'react';
import './css/App.scss';
//test line below
import APITest from './component/APITest'
import Timer from './component/Timer'
import SwiperCard from './component/SwiperCard'
import photoDb from './db/photoDb'

console.log(photoDb)

function App() {
    return (
        <div className="App">
            <APITest />
            <Timer />
            <div className="swipeArea">
				{photoDb.map((card) =>
					<SwiperCard key={card.name} cardName={card.name}/>
				)}
            </div>
        </div>
    );
}

export default App;
