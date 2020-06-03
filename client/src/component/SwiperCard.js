import React from 'react'
import TinderCard from 'react-tinder-card'

const SwiperCard = () => {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="swipeArea">
            <TinderCard className="singleCard" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>Hello, World!</TinderCard>
        </div>
    )
}

export default SwiperCard
