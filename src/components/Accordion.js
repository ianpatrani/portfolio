import React from 'react';

const Accordion = ({ title, active, setActive, p, p2 }) => {

    let active2 = active === title ? "show" : "";

    return (
        <div className="accordion">
            <div className="accordionHeading">
                <div className="container">
                    <p>{title}</p>
                    <span onClick={() => setActive(title)}>
                        {active === title ? "" : "+" }
                    </span>
                </div>
            </div>
            <div className={`accordionContent ${active2}`}>
                <div className="container">
                    <p>{p}</p>
                    <p>{p2}</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion;