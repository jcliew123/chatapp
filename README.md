# Chatapp (Node.js + ViteReact)

Express as the backend, which connects to ChatEngine.IO to retrieve or create user. Only has 1 endpoint available which is "/authenticate"

Vite+React as the frontend. Only has 2 main components:
AuthPage: Landing page that allows user to enter username, calls the "/authenticate" endpoint to create or retrieve user(if user exists)
ChatsPage: Page that display all the chats, create new chat and chat with other users. (Uses the react-chat-engine-pretty for the UI design)
