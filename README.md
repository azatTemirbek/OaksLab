# OaksLab
Every startup goes through several stages. In every stage, there are necessary steps to be accomplished.
## Note
- main branch is mobile version
- create-react-app branch is web version

```sh
git checkout create-react-app
yarn install && yarn start
```

```sh
git checkout main
yarn install && npx pod-install ios && yarn start
```
(after started press i to build ios or a to build android)

## Features
- [x] Every phase can have an unlimited amount of tasks
- [x] If the startup accomplishes all tasks in the phase, it’s marked as done and unlocks the next phase.
- [x] Tasks cannot be marked as completed unless all tasks in the previous phase were completed.
- [x] Propose and implement a solution how to reopen (undo) a task. (when previous phase task is reopened all tasks in the in subsequent phases are also reopened).
- [x] started at 12-Feb-2023 22:00 completed at 12-Feb-2023 23:53



