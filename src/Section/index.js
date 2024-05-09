import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="list">
        <div className="list__sectionHeader">
            <h2 className="list__header">{title}</h2>
            {/* <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} /> */}
            {extraHeaderContent}
        </div>
        <div className="list__container">
            {/* <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} /> */}
            {body}
        </div>
    </section>
);

export default Section;