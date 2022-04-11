import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DefaultView from '../../../../components/OverviewComponents/imageGallery/DefaultView.jsx';





describe.only("DefaultView", () => {
  let toggleExpanded = jest.fn();
  const mount = (overrides = {}) => {
    const testData = {
      updateMainImageHandler: () => { },
      scrollThumbnails: () => { },
      scrollMainImages: () => { },
      toggleExpanded: toggleExpanded,
      parentState: {
        styleImages: [{ url: 'asdf', thumbnail_url: 'lkjh' }, { url: 'qwer', thumbnail_url: 'poiu' }, { url: 'zxcv', thumbnail_url: 'mnbv' }],
        thumbnailStart: 1,
        thumbnailEnd: 3,
        mainImageIdx: 2,
      },
    };

    const props = {
      ...testData,
      ...overrides,
    };

    return render(
      <DefaultView
        {...props}
      />
    )
  }

  beforeEach(() => {
    toggleExpanded = jest.fn();
  })

  it("should fire toggleZoom", () => {
    const { container, debug } = mount();
    // debug();
    const mainImage = container.getElementsByClassName('main-img')[0];
    expect(mainImage).toBeTruthy();

    fireEvent.click(mainImage);
    expect(toggleExpanded).toHaveBeenCalled();

    // toBe

  });

  // screen getByText(sync), findByText(async) (it block needs to be async and the findByText awaited)
  // toHavebeenCalled

  // beforeEach(() => {
  //   //handleSloganClick = (slogan) => { }
  //   handleSloganClick = jest.fn(myFunction)
  // })

  // afterEach((=> {
  //   // clean up stuff
  // })
  // beforeAll(() => {
  //   handleSloganClick = jest.fn()
  // })

  // afterAll((=> {
  //   // clean up stuff
  // })

  // it("should render the slogan text from props", () => {
  //   mount()

  //   const { getByText, queryByText } = screen
  //   getByText(testData.slogan)
  //   expect(queryByText("This is not on the screen")).toBeNull()

  //   fireEvent.click(getByText(testData.slogan))// finds the element that contains the given text and clicks it
  //   //expect(called).toBeTruthy()
  //   //expect(2).toBe(3)
  //   expect(handleSloganClick).toHaveBeenCalledWith(2)
  //   expect(handleSloganClick).toHaveReturnedWith(4)
  // })

})