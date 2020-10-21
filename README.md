# react-node-kanban
A toy ​kanban board​ to manage the hiring process, similar to ​Trello.

## TypeScript
TypeScript was used throughout the code base for the maintainability and scalability benefits brought by strong typing.

## Database
Since every applicant's info are fairly encapsulated and not highly related (if at all) to other applicants', I felt like MongoDB and its document model was a suitable choice.

[Official Docker image for Mongo-Express](https://hub.docker.com/_/mongo-express)

## [react-modal](http://reactcommunity.org/react-modal/)
This package was used to create the modal form for adding an applicant card. 

A modal interface was chosen for the purpose of this job app tracking app since each card, when created, needs several pieces of input, as opposed to the normal, single text input field of a Trello card. A modal offers more open space for these extra inputs.

This package "fulfills the accessibility requirements of the modern web".