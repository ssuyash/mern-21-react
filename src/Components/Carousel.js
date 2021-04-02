import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="http://source.unsplash.com/random/1080x350" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="http://source.unsplash.com/random/1080x350" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="http://source.unsplash.com/random/1080x350" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        )
    }
}
