import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <div className="list__newButtons">
            <button className="list__otherButtons">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="list__otherButtons"
                disabled={props.tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;