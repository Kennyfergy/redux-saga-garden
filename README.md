# Redux Saga Garden

The saga continues with an epic garden of epicness!

## Snapshots
<img width="908" alt="Screenshot 2023-10-04 at 7 50 44 PM" src="https://github.com/Kennyfergy/redux-saga-garden/assets/121765690/0d631e91-46bb-40f1-bc5b-2ebbccdfff2a">
<img width="1162" alt="Screenshot 2023-10-04 at 7 51 48 PM" src="https://github.com/Kennyfergy/redux-saga-garden/assets/121765690/ceb5185b-d54f-4385-baa3-119dc6179642"<img width="1158" alt="Screenshot 2023-10-04 at 7 52 07 PM" src="https://github.com/Kennyfergy/redux-saga-garden/assets/121765690/9727de1d-7699-465c-8dc7-b5079c81947b">
>

## Create database and table

Create a new database called `garden` and run the SQL in the `database.sql` file.

## Development Setup Instructions

- Run `npm install`
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server` to start the server
- Run `npm run client` to start the client
- Navigate to `localhost:3000`

## Lay of the Land

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/`  contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

## Base Mode Problems Solved

1. Added `redux-logger` middleware to the project for debugging
1. Added `redux-sagas` to the project to make an API request. The route `http://localhost:5000/api/plant` returns an array of plants. Display that array on the `PlantList` component on load.
1. Added all of the plant fields to the form to allow adding a new plant to the database. The server `post` route to do this is available at `http://localhost:5000/api/plant`.
1. Added a `Delete` button for each plant to allow it to be removed from the database. The server `delete` route to do this is available at `http://localhost:5000/api/plant/1`, for the plant with the `id` of `1`.

## Stretch Goals

1. Added `material-ui` to the project to give the site an earthy color palette (green and brown?)
1. Use `react-router` so that when a user navigates to `http://localhost:3000/#/plant/1` it displays the details for a given plant. The server `get` route to do this is available at `http://localhost:5000/api/plant/1`. Research [URL Parameters for React Router](https://reacttraining.com/react-router/web/example/url-params)

