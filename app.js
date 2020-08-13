const yargs = require('yargs')
const note = require('./notes')
const {
    demandOption
} = require('yargs')
const notes = require('./notes')

// Add notes
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Read note
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() {
        console.log('Reading note...')
    }
})


// List all note
yargs.command({
    command: 'list',
    describe: 'Lists all note',
    handler() {
        console.log('Listing all note...')
    }
})

yargs.parse()