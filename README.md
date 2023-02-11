# React Project

## App details

The application was bootstraped using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). You can add any aditional libraries like the below:

- [React Router](https://github.com/ReactTraining/react-router) - for client-side (browser) routing
- [axios](https://github.com/axios/axios) - for HTTP requests
- any UI library such as [Ant Design](https://ant.design/), [reactstrap](https://reactstrap.github.io/) or [Material UI](https://material-ui.com/)
- any other global state management tool such as [ContextAPI](https://reactjs.org/docs/context.html), [Redux](https://redux.js.org/), [react-query](https://react-query-v3.tanstack.com/), etc.

## Fake REST API

The only already installed dependency is the [JSON server](https://github.com/typicode/json-server) (development dependency), a "fake" REST API. This API exposes 3 different resourses (stats, courses and instructors) and you can view it on `db.json` file. We will demonstrate how this API works, but feel free to read the package details and this [nice introductory article](https://aviyel.com/post/152/learn-api-with-hoppscotch-and-json-server). For the visual learners there is also a nice [quick intro video](https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server).

## Run locally

You need to have node.js installed. I am using node version `16.18.0` and npm version `8.19.2`, but you can use any modern node/npm version you want. When you are ready, you can install all dependencies and run the development servers by typing the below commands:

```shell
npm install
npm run api // Runs API server in port 3001
npm start // Runs the create react app server in port 3000
open http://localhost:3000
```

When you are ready start implementing the below user stories. The screenshots use [reactstrap](https://reactstrap.github.io/) as a UI library (a Bootstrap implementation for React), but feel free to use whichever one you like. Just use the components that make more sence and display the screens / data nicely.

## User stories

### Dashboard page

The dashbord page must contain:

1. Dashboard stats (beneficiaries, years Running, etc.)
2. a list with the last 5 courses
3. every course must have a link that leads to the course details page
4. a link that leads to the courses page

#### Dashboard (screenshot)

![Dashboard](public/tutorial/dashboard.png)

### Courses page

The courses page must contain:

1. all the available courses
2. every course must have a link that leads to the course details page

#### Courses Page (screenshot)

![Courses Page](public/tutorial/courses-page.png)

### Course details page

The course details page must contain:

1. all the details of the course
2. a way to edit the current course (link to new page, modal, etc.)
3. a button to delete the current course

#### Courses Details Page (screenshot)

![Courses Details Page](public/tutorial/course-details-page.png)

### Add new course page

The add new course page must contain:

1. a form with the appropriate course fields
2. a submit button that posts the data correctly

#### Add new course page (screenshot)

![Add new course page](public/tutorial/add-new-course.png)

### Extras / Bonus

- Make the site as user-friendly as possible
- Add form (client-side) validations
- Make the site responsive
- Make the site accessible (accessibility)
