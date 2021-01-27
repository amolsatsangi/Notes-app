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
    handler:function(){
        console.log("Removing a note!!")
    }
});
//List the notes
yargs.command({
    command:'list',
    describe:'Listing all the notes',
    handler:function(){
        console.log('Listing all nodes!!');
    }
});
//Read the note
yargs.command({
    command:'read',
    describe:'Reading the note',
    handler:function(){
        console.log('Reading the note!!');
    }
})
yargs.parse();
