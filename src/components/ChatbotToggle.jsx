import { useState } from 'react';
import Chatbot from './Chatbot.jsx'; 
import style from '../styles/Chatbot.module.css'; 

const ChatbotToggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleChat = () => setIsVisible(prev => !prev);

    return (
        <div className={style['floatingContainer']}>
            {isVisible && (
                <div className={style['floatingChat']}>
                    <Chatbot />
                </div>
            )}
            <button className={style['floatingButton']} onClick={toggleChat}>
                {isVisible ? '✖' : '💬'}
            </button>
        </div>
    );
};

export default ChatbotToggle;