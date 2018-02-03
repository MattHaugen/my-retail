import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearchPlus from '@fortawesome/fontawesome-free-solid/faSearchPlus';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import colors from '../constants/colors';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ZoomControl = styled.button`
  width: 100%;
  color: ${colors.darkGray};
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  border: none;
  background-color: #FFF;
  cursor: pointer;

  .image-carousel-zoom-icon {
    margin-right: 5px;
  }
`;

const CarouselNavigation = styled.div`
  width: 100%;
  height: 70px;

  button {
    height: 100%;

    img {
      height: 100%;
    }
  }
`;

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [...props.images.PrimaryImage, ...props.images.AlternateImages],
      primaryImageIndex: 0
    }
  }

  getNextImageIndex(currentIndex, numberOfImages) {
    return currentIndex + 1 === numberOfImages ? 0 : currentIndex + 1;
  }

  getPreviousImageIndex(currentIndex, numberOfImages) {
    return currentIndex - 1 === -1 ? numberOfImages - 1 : currentIndex - 1;
  }

  selectImage(imageIndex) {
    this.setState({
      primaryImageIndex: imageIndex
    });
  }

  render() {

    let classReference = this;
    let nextImageIndex = this.getNextImageIndex(this.state.primaryImageIndex, this.state.images.length);
    let previousImageIndex = this.getPreviousImageIndex(this.state.primaryImageIndex, this.state.images.length)
    let previewImageIndexes = [ previousImageIndex, this.state.primaryImageIndex, nextImageIndex ];

    const previewImages = previewImageIndexes.map((imageIndex) => {
      return (
        <button key={imageIndex} onClick={() => classReference.selectImage(imageIndex)}>
          <img src={this.state.images[imageIndex].image} alt='Preview' />
        </button>
      )
    });

    return (
      <CarouselContainer>
        <img src={this.state.images[this.state.primaryImageIndex].image} alt='Primary'/>
        <ZoomControl>
          <FontAwesomeIcon icon={faSearchPlus} className='image-carousel-zoom-icon'/>view larger
        </ZoomControl>
        <CarouselNavigation>
          <button onClick={() => this.selectImage(previousImageIndex)}><FontAwesomeIcon icon={faChevronLeft} /></button>
          {previewImages}
          <button onClick={() => this.selectImage(nextImageIndex)}><FontAwesomeIcon icon={faChevronRight} /></button>
        </CarouselNavigation>
      </CarouselContainer>
    )
  }
}

export default ImageCarousel;
