# Notes App

A simple command-line note-taking application built using Node.js, yargs, and chalk. This app allows you to add, remove, list, and read notes directly from your terminal.

## Features

- **Add Notes**: Create a new note with a title and body.
- **Remove Notes**: Delete an existing note by its title.
- **List Notes**: Display all the notes you have created.
- **Read Notes**: Read a specific note by its title.

## Installation

1. Clone the repository or download the source code:

    ```bash
    git clone https://github.com/amolsatsangi/notes-app.git
    cd notes-app
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

The app uses the command line to manage notes. Below are the commands you can use:

### Add a Note

```bash
node app.js add --title="Your Note Title" --body="Your Note Body"
```
This command will add a new note with the specified title and body.

### Remove a Note
``` bash
node app.js remove --title="Your Note Title"
```
This command will remove the note with the specified title.

### List All Notes
``` bash
node app.js list
```
This command will list all the notes you have created.

### Read a Note
```bash
node app.js read --title="Your Note Title"
```
This command will read the note with the specified title.

### Dependencies
- yargs: Used for command-line argument parsing.
- chalk: Used for terminal string styling.
- fs: Node's built-in module to interact with the file system.
