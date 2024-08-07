const messages=["This is where it all begins...",
    "Yeah fuck that xd",
    "U fucking retard","The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position","This commit is a lie","I'll explain when you're older!",
    "Here be Dragons","Reinventing the wheel. Again.",
    "This is not the commit message you are looking for"
    ,"Batman! (this commit has no parents)",];
const funnyCommit=()=>{const message=messages[Math.floor(Math.random()*messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);}

module.exports={
    funnyCommit
};