import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import QuestionList from "../../../components/Q&A/QuestionList.js";
import renderer from 'react-test-renderer';
//you've defeated me today jest
// const testData = {
//   "id": 1,
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140"
// }

// //just trying to mess with enzyme/jest

// describe("QuestionList", () => {
//   const mount = (overrides = {}) => {
//     const props = {
//       ...testData,
//       ...overrides
//     }
//     return render(
//       <QuestionList
//         {...props}
//       />
//     )
//   }

//     it("should render the slogan text from props", () => {
//       mount()

//       const { getByText, queryByText } = screen
//       console.log(getByText('Q'));
//       // expect()
//       // console.log('queryByText', queryByText());
//     })
//   })
