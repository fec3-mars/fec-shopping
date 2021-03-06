import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProductSlogan from '../../../../components/OverviewComponents/ProductInfo/ProductSlogan.jsx';
jest.mock('../../../../components/OverviewComponents/productInfo/ProductSlogan.css');

const testData = {
  "id": 1,
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140"
}

describe("ProductSlogan", () => {
  let handleSloganClick, called
  const mount = (overrides = {}) => {
    const props = {
      ...testData,
      ...overrides
    }
    return render(
      <ProductSlogan
        handleClick={handleSloganClick}
        product={props}
      />
    )
  }

  const myFunction = (num) => num * 2

  beforeEach(() => {
    //handleSloganClick = (slogan) => { }
    handleSloganClick = jest.fn(myFunction)
  })

  // afterEach((=> {
  //   // clean up stuff
  // })
  // beforeAll(() => {
  //   handleSloganClick = jest.fn()
  // })

  // afterAll((=> {
  //   // clean up stuff
  // })

  it.only("should render the slogan text from props", () => {
    mount()

    const { getByText, queryByText } = screen
    getByText(testData.slogan)
    expect(queryByText("This is not on the screen")).toBeNull()

    fireEvent.click(getByText(testData.slogan))// finds the element that contains the given text and clicks it
  })
})