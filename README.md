## Running The Case Study

Created from [Create React App](https://github.com/facebookincubator/create-react-app)

#### `npm install`

Installs all dependencies.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Future Improvements

All told I spent ~15 hours on the case study. Since this was my first time building a React/Redux app from scratch, a fair amount of this time was learning. Given more time, here's what I would improve.

- Currently the item data is read in via the local JSON file, but real world would be coming from an API, so my current Redux data loading pattern would need to change (async handling).
- I implemented tests for some of the components and reducers, but the coverage is by no means complete. I've done lots of testing in Jasmine/Sinon/Mocha/Chai, so hopefully this shows I can also pick up Jest.
- I'd love to implement some CSS animations on the image carousel to make it more fluid.
- The ProductHighlights component uses dangerouslySetInnerHTML to render the bullet points. Ideally we should parse the input and turn the HTML tags into Styled Components tags so we can output JSX.
- The +/- symbols in the QuantityControl buttons aren't perfectly centered, and for a visual person like myself it drives me nuts.
- The "return policy" link should open a modal that displays the full legal return policy text (since we have it in the JSON).
- The "view all reviews" link should open a modal that displays the remaining customer reviews (again since we have them in the JSON).
- Id like to implement PropTypes across all components for better integrity checks. I added it to some just so I could learn how to do it, but didn't add it to all.
- Moment.js was throwing a warning related to not being able to identify the date format of the datePosted property of the customer reviews. I tried to create a parsing pattern but was also having trouble, so I silenced the warning by wrapping the string in a generic Javascript Date. Per the Moment.js warning though, this isn't a proper solution. Would like to research more.

## CI/CD Diagram

This diagram makes the following assumptions about the environment
* App is run in a Kubernetes environment via Docker container
* Drone provides the continuous delivery platform

![alt text](CICD.jpg "CI/CD Diagram")
