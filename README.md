# react-node-kanban
A toy ​kanban board​ to manage the hiring process, similar to ​Trello.

# To run the application
**DO NOT RUN `npm install`!** No need to have the node_modules locally.

**DO:**

1. Install TypeScript to get `tsc`:
    - `npm i typescript -g`
2. Build the app and Docker images:
    - `npm run build:all`
3. Run the three containers in tandem:
    - `docker-compose up`
4. View the app on `localhost:8080` (served by Nginx reverse proxy)

# To be Improved
## Styling
It would be nice to incorporate a CSS library such as MaterialUI. And general improvement on the look & feel of the app would be necessary.
## Log-In/Sign-Up
Basic approach would be to use cookies to maintain sessions. 
Session ID would be save to MongoDB, and upon landing at the board, the users' session cookie would be 
checked again the DB. If session was still valid, the board would be rendered.
MongoDB has a built-in feature to expire data in a pre-determined time, and it'd be useful here.

Bcrypt would be used to salt and encrypt user passwords.

If time allows, OAuth would be the most ideal.
## Testing
Enzyme/Jest would be used for React front-end and supertest for Node back-end.

## UI
Most desired:
- Uploading resume PDF to each card (perhaps via drag & drop).

These following will be easy to implement.
- Deleting comments
- Updating existing comments
- Adding performance score for each card

# Features, Techs, and Notes
## TypeScript
TypeScript was used throughout the code base for the maintainability and scalability benefits brought by strong typing.

## React State Management
Redux was chosen as the state management library for its scalability. The drawback, of course, was more code and lenghthier setup. 

React `useState` Hooks were also used whenever it made more sense to _not_ keep some states in the store.

Redux Thunk middleware was used to manage async actions that simultaneously made DB calls and dispatched actions to the store.

[Typing the `connect` higher order component](https://redux.js.org/recipes/usage-with-typescript#typing-the-connect-higher-order-component):
- Use the `ConnectedProps<T>` type exported by @types/react-redux^7.1.2 to infer the types of the props from connect automatically. This requires splitting the `connect(mapState, mapDispatch)(MyComponent)` call into two parts.
- Example: `AddCardButton.tsx`

## Drag and Drop
These two DOM methods are particularly important to achieve this feature.
- [`DataTransfer.setData()`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)
- [`DataTransfer.getData()`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData)

And [this tutorial](https://www.youtube.com/watch?v=-MfTv5VRM0A&t=5s) was especially helpful.

---

```
Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
```
This bug was a huge pain! It happened right when a dragged card lands in a new List. 

- Considered using React DnD library to solve the problem. However, before resorting to that, I'll try removing the card from store _at the moment it gets picked up_, instead of when it lands on another List.
- That also didn't work.

The final solution was a store refactoring. Instead of store lists and keeping track of which cards are in which list, the store only stores the cards. Changing a card's status (by dragging) only changes a card's DOM Element attribute (`data-status`) and the status in the database. The `List` component decides where each card goes when rendering them.
- When the app refreshes, it fetches all cards from DB. And since the statuses were updated in the DB, the cards will be rendered to the lists that they were on.

## [react-modal](http://reactcommunity.org/react-modal/)
This package was used to create the modal form for adding an applicant card. 

A modal interface was chosen for the purpose of this job app tracking app since each card, when created, needs several pieces of input, as opposed to the normal, single text input field of a Trello card. A modal offers more open space for these extra inputs.

This package "fulfills the accessibility requirements of the modern web".

## Server
Built with TypeScript and Nodes/Express.

## Database
Since every applicant's info are fairly encapsulated and not highly related (if at all) to other applicants', I felt like MongoDB and its document model was a suitable choice.

[Official Docker image for Mongo-Express](https://hub.docker.com/_/mongo-express)

## Nginx Reverse Proxy
A light-weight reverse proxy is run in its own Docker container. Static files are served from here. 

## Git branch
Hit the "node to be removed is not a child" bug in **add-cards** branch.

Branching off it to write the server in **server** branch.
