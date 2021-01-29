 const fs=require('fs');
 const chalk=require('chalk');
 const getNotes=function(){

 }
function addNotes (title,body){
    const notes=loadnotes();
    const duplicate=notes.filter(function(note){
        if(title===note.title)
        return true;
        else 
        return false;
    });
    if(duplicate.length===0)
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
const saveNote=function(notes){
    const dataJSON=JSON.stringify(notes);

    fs.writeFileSync('notes.json',dataJSON);
}
const loadnotes=function(){
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
const removeNote=function(title){
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

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote:removeNote
}
