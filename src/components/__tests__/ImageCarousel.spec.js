import React from 'react';
import ImageCarousel from '../ImageCarousel';
import renderer from 'react-test-renderer';

describe('ImageCarousel component', () => {
  it('properly renders initial state', () => {
    //ARRANGE
    const inputImages = {
      AlternateImages: [
        {
          image: "Alternate 1"
        },
        {
          image: "Alternate 2"
        },
        {
          image: "Alternate 3"
        }
      ],
      PrimaryImage: [
        {
          image: "Primary Image"
        }
      ]
    };

    //ACT
    const component = renderer.create(<ImageCarousel images={inputImages} />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });

  describe('selectImage', () => {
    it('properly sets primaryImageIndex', () => {
      //ARRANGE
      const inputImages = {
        AlternateImages: [
          {
            image: "Alternate 1"
          },
          {
            image: "Alternate 2"
          },
          {
            image: "Alternate 3"
          }
        ],
        PrimaryImage: [
          {
            image: "Primary Image"
          }
        ]
      };

      //ACT
      const component = renderer.create(<ImageCarousel images={inputImages} />);
      component.getInstance().selectImage(2);

      //ASSERT
      expect(component.getInstance().state.primaryImageIndex).toEqual(2);
    });
  });

  describe('getNextImageIndex', () => {
    it('returns zero if we are at the end of the array of images', () => {
      //ARRANGE
      const inputImages = {
        AlternateImages: [
          {
            image: "Alternate 1"
          },
          {
            image: "Alternate 2"
          }
        ],
        PrimaryImage: [
          {
            image: "Primary Image"
          }
        ]
      };

      //ACT
      const component = renderer.create(<ImageCarousel images={inputImages} />);
      let result = component.getInstance().getNextImageIndex(2, 3);

      //ASSERT
      expect(result).toEqual(0);
    });

    it('returns the next index otherwise', () => {
      //ARRANGE
      const inputImages = {
        AlternateImages: [
          {
            image: "Alternate 1"
          },
          {
            image: "Alternate 2"
          }
        ],
        PrimaryImage: [
          {
            image: "Primary Image"
          }
        ]
      };

      //ACT
      const component = renderer.create(<ImageCarousel images={inputImages} />);
      let result = component.getInstance().getNextImageIndex(1, 3);

      //ASSERT
      expect(result).toEqual(2);
    });
  });

  describe('getPreviousImageIndex', () => {
    it('returns the last index if we are at the beginning of the array of images', () => {
      //ARRANGE
      const inputImages = {
        AlternateImages: [
          {
            image: "Alternate 1"
          },
          {
            image: "Alternate 2"
          }
        ],
        PrimaryImage: [
          {
            image: "Primary Image"
          }
        ]
      };

      //ACT
      const component = renderer.create(<ImageCarousel images={inputImages} />);
      let result = component.getInstance().getPreviousImageIndex(0, 3);

      //ASSERT
      expect(result).toEqual(2);
    });

    it('returns the previous index otherwise', () => {
      //ARRANGE
      const inputImages = {
        AlternateImages: [
          {
            image: "Alternate 1"
          },
          {
            image: "Alternate 2"
          }
        ],
        PrimaryImage: [
          {
            image: "Primary Image"
          }
        ]
      };

      //ACT
      const component = renderer.create(<ImageCarousel images={inputImages} />);
      let result = component.getInstance().getPreviousImageIndex(0, 3);

      //ASSERT
      expect(result).toEqual(2);
    });
  });

});
