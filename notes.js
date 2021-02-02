 const fs=require('fs');
 const chalk=require('chalk');

 const readNote=(title)=>{
     const notes=loadnotes();
     const rnote=notes.find((note)=>note.title===title);
     if(rnote)
     {
         console.log(chalk.inverse(rnote.title));
         console.log(rnote.body);
     }
     else{
         console.log(chalk.red.inverse("No such note!"));
     }
 }
const addNotes =(title,body)=>{
    const notes=loadnotes();
    const duplicate=notes.find(function(note){
        if(title===note.title)
        return true;
        else 
        return false;
    });
    if(!duplicate)
    {
        notes.push({
            title:title,
            body:body
        });
        saveNote(notes);
        console.log(chalk.green.inverse("Note is added!"));
    }
    else{
        console.log(chalk.red.inverse("Note title is taken"));
    }
    
} 
const saveNote=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}
const loadnotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        const data=JSON.parse(dataJSON);
        return data;
    }
    catch(e){
        return  [];
    }
}
const removeNote=(title)=>{
    const notes=loadnotes();
    var delnote;
    const newnotes=notes.filter(function(note)
    {
        if(note.title===title)
        {
            delnote=note;
            return false;
        }
        else
        { 
            return true;
        }
    }); 
    if(delnote)
    {
        saveNote(newnotes);
        console.log(chalk.green.inverse("Note removed"));
    }
    else
    {
        console.log(chalk.red.inverse("No such node is there."));
    }
    
}
const listNotes=()=>{
    const notes= loadnotes();
    console.log(chalk.inverse("Your notes :"));
    notes.forEach(function(note){
        console.log(chalk.blue(note.title)+" - "+chalk.green(note.body));
    })
}
module.exports = {
    readNote: readNote,
    addNotes: addNotes,
    removeNote:removeNote,
    listNotes:listNotes
}
