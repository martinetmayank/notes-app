const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}


const addNote = (title, body) => {
    const notes = loadNote()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {

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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}