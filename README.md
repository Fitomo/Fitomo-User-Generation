
# FitomoUserGeneration

  Live Site: http://198.199.119.144:4000/

## Table of Contents

1. [Getting started](#Getting-Started)
  1. [Clone the latest version](#Clone-Latest)
  2. [Install dependencies](#Install-Dependencies)
  3. [Define Enviormental Variables](#Define-Env)
  4. [Run the application](#Run-Application)
2. [Tech Stack](#Tech-Stack)
3. [Directory Layout](#Directory-Layout)
4. [Contributing](#Contributing)
5. [License](#License)

## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of the Fitomo/Fitomo-User-Generation and on your local machine by running:

  ```sh
  $ git clone https://github.com/Fitomo/Fitomo-User-Generation.git
  $ cd Fitomo-User-Generation
  ```

#### 2. Install Dependencies
  From within the root directory run the following command to install all dependencies:

  ```sh
  $ npm install
  ```
#### 3. Define Enviormental Variables
  Define the enviormental variable IP to equal the host of the server.
#### 4. Run the application
  
  ```sh
  $ npm start
  ```
  Access the application at the host's port 4000

## Tech Stack

##### Front End:
- React

##### Back End:
- Node
- Express

##### Testing:
- Mocha
- Chai
- Travis CI

## Directory Layout
```
├── /client/                    # Client files
│   ├── /components/            # Front-End Dependencies
├── /lib/                       # Compiled Program
├── /node_modules/              # 3rd-party libraries and utilities
├── /server/                    # Client source code
│   ├── /controllers/           # Manage API calls and request handling
│   ├── /generators/            # Generate User Data
│   ├── /routes/                # Handle all routing
│   ├── /server.js              # Core server file
├── /StickMan/                  # Fitomo avatar pictures
├── /test/                      # Test Setup
├── .eslintrc                   # ESLint settings
├── .babelrc                    # Babel settings
├── .travis.yml                 # TravisCI settings
├── Dockerfile                  # Docker configuration
├── package.json                # List of 3rd party libraries and utilities to be installed
```

## Contributing

  1. Fork the repo.
  2. Clone it to your local computer
  3. Cut a namespaced feature branch from master and name it appropriately
  4. Make commits and prefix each commit with the type of work you were doing
  5. BEFORE PUSHING UP YOUR CHANGES, rebase upstream changes into your branch, fix any potential conflicts, and then push to your fork.
  6. Submit a pull request directly to the master
  7. Someone else will perform code review to keep codebase clean
  8. Fix any errors or issues raised by the reviewer and push the fixes as a single new commit
  9. Repeat until the pull request is merged.

## License

M.I.T
