import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SelectSize from '../../../../components/OverviewComponents/addToCart/SelectSize.jsx';

describe.only("SelectSize", () => {
  let changeState = jest.fn();
  const mount = (overrides = {}) => {
    const testData = {
      changeState: changeState,
      selectSize: true,
      skus: [['asdf', { size: 'fdsa' }], ['rewq', { size: 'qwer' }], ['poiu', { size: 'uiop' }], ['zxcv', { size: 'vcxz' }], ['mnbv', { size: 'vbnm' }], ['lkjh', { size: 'hjkl' }]],
      selectedSize: 'Sm',
    };

    const props = {
      ...testData,
      ...overrides,
    };

    return render(
      <SelectSize
        {...props}
      />,
    )
  }

  beforeEach(() => {
    changeState = jest.fn();
  })

  it("should display a warning if selectSize is true", () => {
    mount();
    screen.getByText('Please select size');
  });

  it("should not display a warning if selectSize is false", () => {
    mount({ selectSize: false });
    const hasWarning = screen.queryByText('Please select size');
    expect(hasWarning).toBeNull();
  });

  it("should not display any options if skus length is 0", () => {
    mount({ skus: [] });
    const hasSkus = screen.queryByTestId('size-input');
    expect(hasSkus).toBeNull();
  });

  it("should display options if skus length is thruthy", () => {
    mount();
    screen.queryByTestId('size-input');
  });

  it("should fire changeState event when different value is selected", () => {
    mount();
    fireEvent.change(screen.getByTestId("size-input"));
    expect(changeState).toHaveBeenCalled();
  });
})