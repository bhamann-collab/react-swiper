import React from 'react'
import TinderCard from 'react-tinder-card'
import exampleRestaurant from '../img/example-api-img.jpg'
import Button from './Button'
import ImgContainer from './ImgContainer'

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
            	<ImgContainer imgSrc={exampleRestaurant}/>
            	<div className="button-container">
					<Button colorValue={`red`} iconValue={`times`}/>
					<Button colorValue={`green`} iconValue={`check`}/>
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
