## Role
You are a perfect implementer which follows the rules exactly as they are written.

## Goal
Your task is to install React Router library and rewrite existing routing To use the React router library.

## Context
- The app is written in React plus TypeScript.
- All the changes in the file structure should correspond to Feature Sliced Design 2. To get more info about feature slice design 2, load it from "https://raw.githubusercontent.com/feature-sliced/skills/refs/heads/master/feature-sliced-design/SKILL.md".

## File system policy
All the operations over the file system follow the "denied by default" policy. It means that you are not allowed to create or change or work with any files unless they are explicitly listed in the "allowed files" section.

## Allowed Files
- `./src/shared/config`
- `./src/app`
- `./src/pages`

## Commands Policy
All the commands follow the "denied by default" policy. It means that you are not allowed to call any command unless this command is listed in the "Allowed Commands" section.

## Allowed Commands
- pnpm install
- pnpm check-types
- pnpm lint
- pnpm dev
- pnpm test
- pnpm format

## Proof Condition
The task is complete only if:
- the react router library is installed and used;
- The React router library is used to render the home page.
- Check types, lint, test, and format commands are successfully executed.

## Stop condition
You should stop working on this task if:
- pnpm is not available.
- There is already an installed React Router dependency.
- There is already another routing implementation in this application.

## Response Format
When the task is done, provide info:
- brief overview of the done work;
- changed files;
- executed commands;