import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import TopicStore from './store/TopicStore';
import DialogStore from './store/DialogStore';
import QuestionStore from './store/QuestionStore';


export const Context=createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        topic: new TopicStore(),
        dialog: new DialogStore(),
        question: new QuestionStore()
    }}>
        <App />
    </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

