import React from "react";
import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed";
import  './App.css';

const projectID = "60dfd227-9316-49e0-91ad-b7ed9dc90b35";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;
