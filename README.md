Project Title: Front End Capston Shopping Website

Overview: This is a fully functional web application that meets the specifications and requirements outlined by project stakeholders. Each member of the team worked on one widget that contributed towards entirety of the web application. This is an mock e-comemerce application that interacts with an existing API.  

BRD Link:
Project Folder: 

Table of Contents: 
- Team Members
- Description
- Installation
- Usage


Team Members:
Zach Carpenter: Product Overview
Lucas Bonner: Question and Answers 
Wendy Zhang: Related Products
Paul Koh: Ratings and Reviews

Description: 
Our application requests data from existing API hosted on herouku. Express acts as the middleware between the application and the API, providing authorization through Github token. It dynamically renders data according to user interaction - certain features are solely based on user inputs, such as, submitting a new question/answer, writing a new product review, or customizing an outfit list.
 

**Product Overview:**

- Provides a location for the user to look at product information through images, pricing, features, and discription. 
- Provides the user with the ability to look at different styles of the same product and each style renders out new pictures representing the respective style
- Clicking on the main image allows the user an experience of focusing only on the images for a given style in a separate, blacked out modal. Inside the modal, the user can toggle between the selected styles thumbnails and can zoom into the currently selected image by clicking on the image. (To exit the modal, the user must click the close button located in the top right corner.
- Purchasing the item has a series of checks that require the use to first, select the size of the product they're interested in purchasing. Next, after selecting a size, the user can select a quantity (which will only allow the user to buy the amount that is in-stock, no more). Finally, having selected a qty and size, the user can purchase the product (the purchase button dissapears to keep the user from purchasing multiple times).
- Lastly, at the bottom of the overview section, is the portion of the product overview where a user can share the given product through a social media outlet (facebook, pinterest, twitter links provided).


**Questions and Answers:**

- Renders four questions with two answers each by default, while also providing expanding, scrollable window for more answers, and a ‘Load More Questions’ button to provide more questions.
- Provides dynamic live-search with text-highlighting after three or more characters are typed implemented using RegEx. 
- Questions ordered by degree of ‘helpfulness’
- Clicking helpful or report buttons cause page to dynamically render.
- Provides modal windows for adding an answer or question, both of which cause the page to dynamically render.
- Add an answer modal supports image uploads that persist.
- Answers support thumbnail images that when click open a modal window at full-resolution.

![q a](https://user-images.githubusercontent.com/66486962/163690654-e768b234-34ce-4696-a5aa-ca904cf147f8.gif)


**Related Products:**

- Displays cards of related products that contains product thumbnail, category, product name, price, as well as ratings, which originates from 3 different APIS. There is also a comparison feature, which on click would display a modal of feature comparison between selected card and current product on display.

![PlKvGk8jeh](https://user-images.githubusercontent.com/96356348/163690549-d1e80f8e-1eb6-4e7f-9b1b-ab6bffed8634.gif)


**Your Outfit**
- This is a list that user can customize themselves. There is a button that allows user to add current product on display onto the outfit list. User can only add one product once, or else the window will have popup message telling user that product has been saved. Each card also has a button to remove an item from the list. The cards in Outfit List is contains the same information as Related Products.
- 
![EyIDVl9gf8](https://user-images.githubusercontent.com/96356348/163690276-70598c35-4313-4faa-b95e-21687498d70a.gif)

**Ratings and Reviews:**

- Renders two initial reviews, populates a "view more reviews" button. Upon click, renders out two additional reviews as long as there are additional reviews exisiting, and if there are no more reviews, the button disappears.
- Submit Review will render a modal that saves the data inputs. Once "submit review" button is clicked, it will send a POST request to the API, and the new review will be saved onto the database.
- Dynmically renders the average product rating, number of stars that review has, and characteristics that the product has.


**Installation:**

Our appliation uses Express, React, Axios, Webpack, and Babel. The developer would need to run:
1. yarn install
2. create config.js
3. Create token on Github, and put the token into .env
4. yarn start to bundle the webpack
5. yarn server to start the server. 



