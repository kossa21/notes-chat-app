
//This function reads the content of the input 
const readText = e => {
        const inputEl = document.querySelector("#message-box");
    const messageText = inputEl.value;

    inputEl.value = "";

    return messageText;
}

//This function creates the correct time for a message
const createMessageDate = () => {
    
    let date = new Date();
    date = date.toLocaleTimeString();

    const dateEl = document.createElement("span");
    dateEl.innerText = date;
    
    return dateEl;
}

//This function creates the paragraph for a message
const createMessageParagraph = content => {
    
    const messageEl = document.createElement("p");
    messageEl.innerText = content;

    const dateEl = createMessageDate();
    messageEl.appendChild(dateEl);

    return messageEl;
}

//This function adds or erases the first note 
    let noMessages = true;

    const toggleFirstNote = hideFirstNote => {
        const firstNoteEl = document.querySelector(".message-container p.first-note");
        
        if(hideFirstNote) {
            firstNoteEl.classList.add("disabled");
            noMessages = false;
        } else {
            firstNoteEl.classList.remove("disabled");
            noMessages = true;
        }
    }


//This function adds a new message to the message container
const addMessageToContainer = messageEl => {
    
    //Remove first note
    toggleFirstNote(true);

    const messagesEl = document.querySelector("#message-container");
    messagesEl.append(messageEl);

    messagesEl.scrollTop = messagesEl.scrollHeight;
}

//This function creates a new p with the content of the input
const createMessage = e => {
        
    const messageText = readText();
    if (messageText != "") {
        const messageEl = createMessageParagraph(messageText);
        addMessageToContainer(messageEl);
    }
   
    e.preventDefault();
}

//This function deletes all the existent messages
const deleteMessages = e => {
        const messagesEl = document.querySelector("#message-container");
    messagesEl.querySelectorAll("*").forEach( message => message.remove());

    toggleFirstNote();

    e.preventDefault();
}

//This function will enlarge or reduce the size of the main container
let enlargeMainContainer = true;

const changeContainerSize = () => {
        const mainContainerEl = document.querySelector(".main-container");
    const messageContainerEl = document.querySelector("#message-container");
        
    if(enlargeMainContainer) {
        mainContainerEl.classList.add("big");
        messageContainerEl.classList.add("big");
    }
    else {
        mainContainerEl.classList.remove("big");
        messageContainerEl.classList.remove("big");
    }
    
    
    enlargeMainContainer = !enlargeMainContainer;
}


//Adding click listener to the submit button
const submitBtnEl = document.querySelector("#submitMessageBtn")
                    .addEventListener("click", createMessage);

//Adding click listener to the start over button
const startOverBtnEl = document.querySelector("#startOverMessageBtn")
                    .addEventListener("click", deleteMessages);

//Adding click listener to the enlarge button
const enlargeBtnEl = document.querySelector("#enlargeBtn")
                    .addEventListener("click", changeContainerSize);