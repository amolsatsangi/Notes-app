const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notes.js');
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body);
    }
});
//remove a note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.removeNote(argv.title);
    }
});
//List the notes
yargs.command({
    command:'list',
    describe:'Listing all the notes',
    handler(){
        notes.listNotes();
    }
});
//Read the note
yargs.command({
    command:'read',
    describe:'Reading the note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})
yargs.parse();

