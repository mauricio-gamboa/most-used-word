# Task

Create an application which loads random sentences from API and finds and displays the most used word within the loaded text.

Think about maintainibility, SOLID principles and how to test the application. Demonstrate the usage of unit test framework.

Don't worry if you don't finish everything you want, we are also interested in your progress and ideas about how to continue the development.


## Time limit

Spend 90 - 120 minutes with the task.


## Application

The application should use some reactive framework (Vue, React, Angular, ..).

It should show the form to the user with an input field for an integer from 1 to 10. This value will be used in the API request to define how many sentences should the API return.

When a user clicks on the button, the application will call an API endpoint (see below), parses the response and analyzes the text in `text` json field.

The application will find the most used word in the text and display it to the user.


## API endpoint

API endpoint to load random sentences is `https://4r4x8h5ai7.execute-api.eu-central-1.amazonaws.com/dev/random-sentences/{n}` where `{n}` is an integer specifying how many sentences should be generated. All sentences will be returned in the `text` field of the returned json.

The API endpoint returns HTTP code 200 and `application/json` with the following structure:

```
{
  "text": "Text to be analyzed ..."
}
```

The API endpoint returns HTTP code 200 and empty text if the number of sentences is not a number.

The API endpoint returns HTTP code 403 if you don't pass the argument `n`.


## Delivery

- create the git repository with your application
- include instructions on how to run the application in the local environment

# Available Scripts

Important! Please install the node modules with `npm start` before running the scripts.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

If you want to run the production build locally, navigate to the build folder in the terminal and start a local server.