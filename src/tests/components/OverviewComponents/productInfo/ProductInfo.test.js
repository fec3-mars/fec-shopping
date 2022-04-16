import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProductInfo from '../../../../components/OverviewComponents/productInfo/ProductInfo.jsx';

// product, selectedStyle, reviewsInfo

describe.only("ProductInfo", () => {
  const mount = (overrides = {}) => {
    const testData = {
      product: { category: 'blah', name: 'anotherBlah' },
      selectedStyle: { sale_price: 100, original_price: 120 },
      reviewsInfo: { totalReview: 4, avgRating: 3.6 },
    };

    const props = {
      ...testData,
      ...overrides,
    };

    return render(
      <ProductInfo
        {...props}
      />
    );
  };

  it("should display a sale price when a sale is given and discount is true", () => {
    mount();
    screen.getByText('$100');
  });

  it("should not display sale price when no sale exists and discount is false", () => {
    mount({ selectedStyle: { original_price: 120 } });
    expect(screen.queryByText('$100')).toBeNull();
  });

  it("should have valid product category", () => {
    mount();
    screen.getByText('blah');
  });

  it("should have valid product name", () => {
    mount();
    screen.getByText('anotherBlah');
  });

  it("should display proper number of reviews", () => {
    mount();
    screen.getByTestId('readAllReviews');
  });
})
