import React, { Component } from 'react'

export default class ImageDisplay extends Component {
  render () {
    return (
      <div className='image-results'>
        {this.props.images.map((image) =>
        <div className='image-map' key={image.id}>
          <ul className='map-details'>
            <img src={image.img_src} alt='' />
            <h4>{image.earth_date}</h4>
          </ul>
        </div>
      )}
      </div>
    )
  }
}
