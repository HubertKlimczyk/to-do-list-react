import "./style.css";

const Form = () => (
    <form className="form">
        <div className="form__body">
            <input className="form__input" id="inputTasks" name="To do" type="text"
                placeholder="Co jest do zrobienia?" autofocus autocomplete="off" />
            <button className="form__button">Dodaj zadanie</button>
        </div>
    </form>
);

export default Form;