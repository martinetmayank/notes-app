const chalk = require('chalk')

const yargs = require('yargs')
const note = require('./notes')
const {
    demandOption
} = require('yargs')


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
    handler: function (argv) {
        note.addNote(argv.title, argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing note...')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading note...')
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all note',
    handler: function () {
        console.log('Listing all note...')
    }
})

yargs.parse()