 const fs=require('fs');
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
        console.log("Note is added!");
    }
    else{
        console.log("Note title is taken");
    }
    
} 
const saveNote=function(notes){
    const dataJSON=JSON.stringify(notes)

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
 

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}