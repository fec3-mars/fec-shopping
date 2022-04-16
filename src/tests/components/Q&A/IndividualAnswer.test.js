import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import IndividualAnswer from "../../../components/Q&A/IndividualAnswer/IndividualAnswer.jsx";

describe("IndividualAnswer", () => {
  let answerHelpful = jest.fn();
  const mount = (overrides = {}, parentStateOverrides = {}) => {
    const testData = {
      answer: {
        id: 1,
        body: 'this is a sample answer body',
        date: '2022-04-12T00:00:00.000Z',
        helpfulness: 5,
        photos: ['https://bit.ly/37YOy4x'],
        answerer_name: 'Seller',
      },
    };

    const props = {
      ...testData,
      ...overrides,
    }

    return render(
      <IndividualAnswer
        {...props}
      />
    )
  }

  beforeEach(() => {
    answerHelpful = jest.fn();
  });

  it('helpful button should exist', () => {
    const { container, debug } = mount();
    const helpfulButton = container.getElementsByClassName('answer-helpful')[0];

    expect(helpfulButton).toBeTruthy();
  });

  it('helpful button should change class after being clicked', () => {
    const { container } = mount();
    const helpfulButton = container.getElementsByClassName('answer-helpful')[0];

    fireEvent.click(helpfulButton);

    const newHelpfulButton = container.getElementsByClassName('answer-helpful-clicked')[0];
    expect(newHelpfulButton).toBeTruthy();
  });

  it('report button should exist', () => {
    const { container } = mount();
    const reportButton = container.getElementsByClassName('answer-report')[0];

    expect(reportButton).toBeTruthy();
  });

  it('expect amount of thumbnails to be one', () => {
    const { container } = mount();
    const numOfThumbnails = container.getElementsByClassName('thumbnail').length;
    expect(numOfThumbnails).toBe(1);
  });

  it('Seller name should be bolded', () => {
    const { container } = mount();
    const answererText = container.getElementsByClassName('answerer-text');

  });
});
