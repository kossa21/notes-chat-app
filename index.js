

const readText = e => {
    const inputEl = document.querySelector("#message-box");
    const messageText = inputEl.value;

    inputEl.value = "";

    return messageText;
}

const createMessage = e => {
    const messageText = readText();

    const messageEl = document.createElement("p");
    messageEl.innerText = messageText;

    const messageDivEl = document.createElement("div");
    messageDivEl.appendChild(messageEl);

    const messagesEl = document.querySelector("#message-container");
    messagesEl.appendChild(messageDivEl);
    
    e.preventDefault();
}

const buttonEl = document.querySelector("#submitMessage");
buttonEl.addEventListener("click", createMessage);