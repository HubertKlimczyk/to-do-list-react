import "./style.css";


const Tasks = (props) => (
    <ul className="list__ul">
            {props.tasks.map(task => (
                <li className={`list__task ${task.done && props.hideDoneTasks ? "list__task--hidden" : ""}`}>
                    <button className="list__button list__button--done">{task.done ? "✔" : ""}</button>                   
                    <span className={`list__content ${task.done ? "list__content--done" : ""}`}>{task.content}</span>                   
                    <button className="list__button list__button--remove">🗑</button>   
                </li>
            ))}
    </ul>
);

export default Tasks;