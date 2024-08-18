import { createContext, useState } from 'react';

import './styles.css';
import { Commentary } from './components/commentary';

export const LikesContext = createContext({
    likes: 0,
});

const ContextApiPage = () => {
    const [likesCounter, setLikesCounter] = useState(0);

    const addLikes = () => {
        setLikesCounter((prev) => prev + 1);
    };

    return (
        <LikesContext.Provider value={{ likes: likesCounter, addLikes }}>
            <div className="context-wrapper">
                <h3>ContextAPI learning</h3>
                <div className="context-main-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    numquam tempore ipsam possimus autem unde similique quae non
                    eveniet sunt, enim neque reprehenderit quo perferendis earum
                    optio quia eum dolore?
                </div>
                <h4>Commentaries</h4>
                <div className="context-commentary-wrapper">
                    {['Hello world!', 'Me too!', "Oh shi~ I'm sorry!"].map(
                        (comment) => (
                            <Commentary key={comment} text={comment} />
                        ),
                    )}
                </div>
            </div>
        </LikesContext.Provider>
    );
};

export default ContextApiPage;
