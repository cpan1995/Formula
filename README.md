# Formula: Candidate FrontEnd Assessment

Welcome to the Formlula Candidate Assessment for the Frontend Deeloper Internship.  We have details instructions on how to get started and what a successful solution will entail.  Please _read and follow_ the enclosed instructions.

## What is it we are building & assessing?

In our assessment we are looking to ensure that you understand the basic of React and how to load data from an API and render it within an APP and also the basics of how to make an application mobile responsive.  This should not take more than 30-45 minutes to complete.

We will provide [design details](https://drive.google.com/file/d/1QrkEaoheLXKh5B_cXCIvU2-jlQNKXou_/view?usp=sharing) (mobile & desktop) for you to implement as well as an API to fetch data from.

### Overview of the Project

The app/project is small, just two screens, for a quick overview of we will look at the __Desktop__ version

This will be the loading screen.

![desktop-loading](./docs/media/desktop-loading.png)

And once the API has loaded you will see the following -- replace `<your-name>` with the data from the API.

![desktop-main](./docs/media/desktop-main.png)

We are providing a newly generated __Create React App__ using `nodejs@14.17.3` for you to implement your solution against.  

### Our Rest API

We also are providing a hosted REST API at `https://dev-assessment.netlify.app/.netlify/functions/` with a set of endpoints that will be used to build the application.  The endpoints will require `Bearer <API_TOKEN>` based authentication.  We will provide a token for you to use.

There is only one endpoints

- __GET__ or __POST__ `/me` will return your user information

They can be ran easily using `curl` (use `brew install curl` if you don't have the command)

```shell
# /ME endpoint
curl -H 'Accept: application/json' -H "Authorization: Bearer 948B8C2427CD29047839B8E4A27A08763F8BEFBAFA86BE5CCE8E46217D75E58A" https://dev-assessment.netlify.app/.netlify/functions/me
```

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## What is a Successful Solution

We want to ensure you submit a successful solution so here is our assessment grading rubric.

|  | Task / Skill-Check   | Description                                                                         |
|---|-------------------|-------------------------------------------------------------------------------------|
| :thumbsup: | Code Complete        | Did you complete the assessment in it's entirety in terms of functionality          |
| :white_check_mark: | Build Passes | We expect `npm run build` or `yarn build` to pass, this is tied to a github/action. |
| :iphone: | Responsiveness       | The design for the UI is responsive and changes based on the mobile/desktop view    |
| :satellite: | API / Network Comms. | Networking communications properly configured                                  |
| :bell: | App State Management | We recommend using React-State / Hooks                                              |
| :thought_balloon: | Pull-Request         | Open up a proper PR, **_read the submission process below_**                            |
| :shipit: | Commit History       | We value [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0)      |

---

## Submitting a Solution

### 1. Setting Up Your Solution

> __IMPORTANT:__ When you receive this zip file create your repository and __COMMIT__ the code as the `initial commit` inside of the _default branch_ `main` or `master`.

### 2. Create a Branch & PR

You should begin to build your solution on a new branch (_we don't care what you call it we recommend_ --  `solution`).  Once you are code complete, create a private repository and push up both branches.  And open up a pull-request against the _default branch_ `main|master`.

### 3. Finalize & Submit

Invite `sameeranand1` and `mgan59` to your repository so we can see your pull-request.  We also recommend assigning the PR to us so that we get notifications in our github-ui.

### 4. Review Process

Once the reviewers are added to the repository, we will conduct a quick PR review and setup a time to go over the code together.# Formula
