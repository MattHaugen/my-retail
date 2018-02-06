import React from 'react';
import CustomerReview from '../CustomerReview';
import renderer from 'react-test-renderer';

describe('CustomerReview component', () => {
  it('properly renders (snapshot)', () => {
    //ARRANGE
    const inputReview = {
      overallRating: '1',
      title: 'My Review',
      review: 'Here is the review text',
      screenName: 'Person McPerson',
      datePosted: 'Mon Mar 11 13:13:55 UTC 2013'
    };
    let expectedFormattedDate = 'March 11, 2013';

    //ACT
    const component = renderer.create(<CustomerReview review={inputReview} />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
    expect(JSON.stringify(json)).toContain(expectedFormattedDate);
  });
});
