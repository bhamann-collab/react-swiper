import React from 'react'
import TinderCard from 'react-tinder-card'
import exampleRestaurant from '../img/example-api-img.jpg'
import Button from './Button'

const SwiperCard = () => {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="swipeArea">
            <TinderCard className="singleCard" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
              <img class="imgRestaurant" src={exampleRestaurant} alt="Example Restaurant"/>
              <div className="button-container">
                <Button />
                <Button />
              </div>
              <div className="container">
                <p>Ruby Red Flamingo</p>
                <p>$$</p>
                <p>200m away</p>
              </div>
            </TinderCard>
        </div>
    )
}

export default SwiperCard
