import { createContext, useState } from 'react';
import Commentary from './components/commentary/Commentary';
import './styles.css';

export const LikesContext = createContext({
    allLikes: 0,
});

export const ContextApiPage = () => {
    const [likesCounter, setLikesCounter] = useState(0);

    const addLikes = () => {
        setLikesCounter((prev) => prev + 1);
    };

    return (
        <LikesContext.Provider value={{ allLikes: likesCounter, addLikes }}>
            <div className="context-wrapper">
                <h3>Context API learning</h3>
                <div className="context-main-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illo libero nobis est commodi necessitatibus, quae
                    recusandae beatae ullam minus. Beatae cum praesentium
                    obcaecati dolores animi eveniet, ipsum repellat rerum esse?
                </div>
                <h4>Commentary</h4>
                <div className="context-commentary-wrapper">
                    {['Hello world!', 'Me too!', "Oh shi~ I'm sorry!"].map(
                        (comment, index) => {
                            return <Commentary key={index} text={comment} />;
                        },
                    )}
                </div>
                <div>
                    Likes:<span>{likesCounter}</span>
                </div>
            </div>
        </LikesContext.Provider>
    );
};
