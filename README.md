# Technotes Frontend
Browse [here](https://technotesfrontend.msar.me/) for live demo.

## Installation

- Clone this project via, `git clone https://github.com/4msar/technotes-frontend.git technotes` & `cd technotes` 
- Then install dependencies by `yarn install` or `npm install` 
- Then run this command to serve `yarn start` or `npm run start` 
- That's it.

## Usage
After view the homepage, Click the `Login` button in the landing page, then a modal will be appear, insert your email and submit.

After a successful login you will see the notes homepage. 
To add new notes click the right sidebar top `New` button, a form will be shown, then fill the form and click save.

To share a note click on the note title in sidebar then in the view part you will see the Share button, after click enter email address to share, then click `Submit` or press `Enter`.

To view all the shared notes, click shared notes from menu, to view all the shared users click the shared users from menu.


## Short Details 
In this app the backend api url is contained in `src/helpers/constant.js` file.  
Used airbnb eslint guide.

## Project Structure
- All the assets stored in `src/assets/` folder.
- Used react context api for global state management, and the action+reducer in `src/store` folder.
- Helper functions, Api Service, axios in `src/helpers/` folder.
- `src/containers` folder contain all the root component of app, routing configured in `src/App.js` file.
- All the sub-component in the `src/component` folder.
