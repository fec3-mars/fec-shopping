import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DefaultView from '../../../../components/OverviewComponents/imageGallery/DefaultView.jsx';

describe("DefaultView", () => {
  let toggleExpanded = jest.fn();
  const mount = (overrides = {}, parentStateOverrides = {}) => {
    const testData = {
      updateMainImageHandler: () => { },
      scrollThumbnails: () => { },
      scrollMainImages: () => { },
      toggleExpanded: toggleExpanded,
      styleImages: [{ url: 'asdf', thumbnail_url: 'lkjh' }, { url: 'qwer', thumbnail_url: 'poiu' }, { url: 'zxcv', thumbnail_url: 'mnbv' }],
      parentState: {
        thumbnailStart: 1,
        thumbnailEnd: 1,
        mainImageIdx: 2,
        ...parentStateOverrides,
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
    const mainImage = container.getElementsByClassName('main-img')[0];

    expect(mainImage).toBeTruthy();

    fireEvent.click(mainImage);

    expect(toggleExpanded).toHaveBeenCalled();

  });

  // Testing Arrows:
  // up
  it("should display up arrow when thumbnail is greater than 0", () => {
    const { container, debug } = mount({}, { thumbnailStart: 0 });

    expect(container.getElementsByClassName('btn__pan-up')[0]).toBeFalsy();
  });
  it("should display up arrow when thumbnail is greater than 1", () => {
    const { container, debug } = mount();

    expect(container.getElementsByClassName('btn__pan-up')[0]).toBeTruthy();
  });

  // down
  it("should display down arrow when thumbnail is not last thumbnail", () => {
    const { container } = mount();

    expect(container.getElementsByClassName('btn__pan-down')[0]).toBeTruthy();
  });
  it("should not display down arrow when thumbnail is last thumbnail", () => {
    const { container } = mount({}, { thumbnailEnd: 2 });

    expect(container.getElementsByClassName('btn__pan-down')[0]).toBeFalsy();
  });

  // left
  it("should display left arrow when main image is not first thumbnail", () => {
    const { container } = mount();

    expect(container.getElementsByClassName('btn__arrow-left')[0]).toBeTruthy();
  });
  it("should not display left arrow when main image is first thumbnail", () => {
    const { container } = mount({}, { mainImageIdx: 0 });

    expect(container.getElementsByClassName('btn__arrow-left')[0]).toBeFalsy();
  });

  // right
  it("should display right arrow when main image is not last thumbnail", () => {
    const { container, debug } = mount({}, { mainImageIdx: 0 });

    expect(container.getElementsByClassName('btn__arrow-right')[0]).toBeTruthy();
  });
  it("should not display right arrow when main image is last thumbnail", () => {
    const { container } = mount({}, { thumbnailEnd: 2 });

    expect(container.getElementsByClassName('btn__arrow-right')[0]).toBeFalsy();
  });

  // visible thumbnails:
  it("should display only thumbnails that exist between thumbnailStart and thumbnailEnd", () => {
    const { container } = mount({
      styleImages: [{ url: 'asdf', thumbnail_url: 'lkjh' }, { url: 'qwer', thumbnail_url: 'poiu' }, { url: 'zxcv', thumbnail_url: 'mnbv' }, { url: '1sdf', thumbnail_url: '1kjh' }, { url: '1wer', thumbnail_url: '1oiu' }, { url: '1xcv', thumbnail_url: '1nbv' }, { url: '2sdf', thumbnail_url: '2kjh' }, { url: '2wer', thumbnail_url: '2oiu' }, { url: '2xcv', thumbnail_url: '2nbv' }],
    }, {
      thumbnailStart: 1,
      thumbnailEnd: 7,
    });
    const thumbnailImages = container.getElementsByClassName('img-thumbnail-container');

    expect(thumbnailImages.length).toBe(7);
  })

  it("should display the number of thumbnails available if less than 7 thumbnails", () => {
    const { container, debug } = mount({}, { thumbnailEnd: 2, thumbnailStart: 0 });
    const thumbnailImages = container.getElementsByClassName('img-thumbnail-container');

    expect(thumbnailImages.length).toBe(3);
  })

})