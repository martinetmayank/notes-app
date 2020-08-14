const fs = require('fs')
const chalk = require('chalk')
const {
    conflicts
} = require('yargs')
const {
    title
} = require('process')


const addNote = (title, body) => {
    const notes = loadNote()

    // Filter will iterate through all items.
    // const duplicateNotes = notes.filter((note) => note.title === title)

    // Find will just find the first item and then it will not iterate.
    // Find method will return 'undefined' if not match is found.
    const duplicateNote = notes.find((note) => note.title === title)

    // if (duplicateNote === undefined) { }
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green('New note added...'))
    } else {
        console.log(chalk.bold.red.bgWhite('Title already taken...'))
    }
}


const loadNote = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const removeNote = (title) => {
    const notes = loadNote()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.bold.inverse('Note sucessfully removed...'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found :('))
    }

}


const listNotes = () => {
    const notes = loadNote()

    notes.forEach(note => {
        console.log(chalk.green(note.title))
        // console.log(chalk.white(note.body))
    });
}


const readNote = (title) => {
    const notes = loadNote()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note found...'))
    }

}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}