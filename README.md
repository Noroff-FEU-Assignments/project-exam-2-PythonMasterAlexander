# Project Exam 2

## Goal

To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate's general development capabilities, in addition to visual and technical skills.

## Brief

An existing Social Media company has approached you to create a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end social media application.

## Installation

## Setup and Run Locally

To set up and run the project locally, follow these steps:

```bash
git clone https://github.com/Noroff-FEU-Assignments/project-exam-2-PythonMasterAlexander.git
cd ./project-exam-2-PythonMasterAlexander
npm install
npm run dev
```

Open http://localhost:5173 with your browser to see the result.
Or navigate to the right port where the server on your local machine opens the port

### Linting and Formating tools

```bash
npm run lint
npm run check-prettier
```

### Deploy

```bash
npm run build
```

### Special Instructions for Testers

Please ensure the following steps are taken during testing:

1. Test all user stories mentioned in the requirements.
2. Pay attention to the responsiveness and user interface.
3. Report any bugs or issues using the project's GitHub Issues.

NB!
Tests for this project has not been included on the delivery, but will be included on the Portfolio2 delivery.

### Check out provided links

All links for the different requirements are provided in:
[Link](delivery-template.html)

## These are the requirements the developer must deliver upon delivery

> All admin functionality is managed by an existing application. This project only covers the front-end application for the API.

## API

The API you are using for this project can be found under Social EndPoints in the [Noroff API documentation](https://noroff-api-docs.netlify.app/).

### Resources

[API Guide](https://noroff-api-docs.netlify.app/social-endpoints/authentication)
[API Documentation](https://nf-api.onrender.com/docs)

### User Stories

The client has specified the following requirements in the form of _User Stories_:

1. A user with a `stud.noroff.no` email may register
2. A registered user may login
3. A registered user may update their avatar and banner
4. A registered user may logout
5. A registered user may view a list of `Posts`
6. A registered user may view a list of `Profiles`
7. A registered user may view a single `Post` by `id`
8. A registered user may view a single `Profile` by `name`
9. A registered user may create a `Post`
10. A registered user may update a `Post` they own
11. A registered user may delete a `Post` they own
12. A registered user may create a `Comment` on any `Post`
13. A registered user may `react` to any `Post` with an emoji
14. A registered user may `follow` and `unfollow` another `Profile`

### Technical Restrictions

The company CTO has set the following technical restrictions:

1. Must use an approved `JavaScript Framework`
2. Must use an approved `CSS Framework`
3. Must be hosted on an approved `Static Host`
4. Must use an approved `Design Application`
5. Must use an approved `Planning Application`

### Required Links

The Product Owner has requested links to the following:

1. A Gantt chart for project timing
2. A design prototype
3. A style guide
4. A kanban project board
5. A repository link
6. A hosted application demo link

## Approved Resources

This list covers libraries and services that have been vetted by the company and approved for use.

### JavaScript Frameworks

- React (>16)

### CSS Frameworks

- Bootstrap (>5)
- Tailwind (>3)
- MUI (>5)
- Styled Components
- CSS Modules

### Hosting Services

- GitHub Pages
- Netlify

### Design Applications

- Adobe XD
- Figma
- Sketch

### Planning Applications

- Trello
- GitHub Projects
