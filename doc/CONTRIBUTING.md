# Project Contribution Guidelines

## Local Setup

### Fork & Clone from GitHub to Local Environment

- Fork the main [Team-Berlin-React](https://github.com/SpaceyaTech/Team-Berlin-React) repo
  [![Screenshot-2022-10-20-at-2-47-14-PM.png](https://i.postimg.cc/Kz31C8cQ/Screenshot-2022-10-20-at-2-47-14-PM.png)](https://postimg.cc/LYR41R1Z)
- clone the forked repo by running the ssh or https links below:

  - ssh: `git@github.com:your-username/Team-Berlin-React.git`
  - https: `https://github.com/your-username Team-Berlin-React.git`

### Naming branches

- After forking and cloning the main branch locally.
- Fetch all your updates from development branch `pre-dev`
    `git fetch origin pre-dev` 
    `git checkout pre-dev`

  or Alternatively 

    `git checkout -b pre-dev`
    `git pull`

  Now create your branch basing on the issue at hand or assigned using 
    `git checkout -b branch-name`

     
- The phrasing of the branch name should reflect whether you are working on a feature, chore, or issue..
- The customary practice is to deploy:
  - `ft` or `feature` when it is a feature or improvement branch. eg `feature-create-header-component`
  - `ch` or `chore` when it is something that doesn't add to the code but is tooling around it. Eg creating linters using a branch naming like `ch-create-linter` or `chore-create-linter`
  - `bg` or `bug` when the branch is for fixing a bug. Eg `bg-fix-breaking-thing` or `bug-fix-breaking-thing`

### Install Dependencies Locally and Run Project

- run `npm i` to install `node-modules` and all project dependencies
- run `npm start` to run the app locally on `localhost:3000`
- test `npm test` the test runner is started in interactive watch mode.  

## Style Guide
- [Check on contribution guide](./CONTRIBUTING.md)
- [Check on Pull request guide](./pull_request_guide.md)



### Setup ESlint, Prettier, and auto format on save

#### VSCode Extensions






