# Demo:- <a target="_blank" href='http://developer-profiles.herokuapp.com/'>developer-profiles.herokuapp.com</a>

# API Specs:-

## Get all developers:-

```js
GET /api/developers
Sample Response Body:
[{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4"
}, {
	"id": "sagarjain0907",
	"avatar_url": "https://avatars.githubusercontent.com/u/20463272?v=4"
}]
Status: 200
```

## Add a developer:-

```js
POST /api/developers
Sample Request Body:
{
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit"
}

Sample Response Body:
{
	"id": "gcnit"
}
Status: 201 (User Created), 400 (GitHub username is invalid)
```

## Get a developer:-

```js
GET /api/developers/:id
Sample Response Body:
{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
	"name": "Gaurav Chandak",
	"company": "workat.tech",
	"blog": "https://workat.tech",
	"location": "Bangalore, India",
	"email": null,
	"bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit",
	"repos": [{
		"name": "awesome-learn-to-code",
		"html_url": "https://github.com/gcnit/awesome-learn-to-code",
		"description": "A list of awesome resources for learning to code",
		"updated_at": "2020-08-12T18:21:53Z"
}]
}
Status: 200 (Valid User), 404 (User does not exist)
```

## Remove a developer:-

```js
DELETE /api/developers/:id

Status: 204 (Deleted)
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
