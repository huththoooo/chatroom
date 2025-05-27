import { database } from './firebase-config.js';
import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

let username = "";

document.getElementById('join-btn').addEventListener('click', () => {
  username = document.getElementById('username').value.trim();
  if (username) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
  }
});

document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
  const msg = document.getElementById('message').value.trim();
  if (msg) {
    const chatRef = ref(database, "messages");
    push(chatRef, {
      name: username,
      message: msg,
      time: new Date().toLocaleTimeString()
    });
    document.getElementById('message').value = "";
  }
}

const chatBox = document.getElementById('chat-box');
const chatRef = ref(database, "messages");

onChildAdded(chatRef, (data) => {
  const { name, message, time } = data.val();
  const msgElement = document.createElement('div');
  msgElement.textContent = `${time} - ${name}: ${message}`;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});
