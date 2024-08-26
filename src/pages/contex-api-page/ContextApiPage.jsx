import Commentary from "./components/commentary/Commentary"
import "./styles.css"

export const ContextApiPage = () => {
    return (
        <div className="context-wrapper">
            <h3>Context API learning</h3>
            <div className="context-main-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Illo libero nobis est commodi necessitatibus, quae recusandae beatae ullam minus.
                Beatae cum praesentium obcaecati dolores animi eveniet, ipsum repellat rerum esse?
            </div>
            <h4>Commentary</h4>
            <div className="context-commentary-wrapper">
                {['Hello world!', 'Me too!', "Oh shi~ I'm sorry!"].map((comment, index) => {
                    return (
                        <Commentary key={index} text={comment} />
                    )
                })}
            </div>
        </div>
    )
}