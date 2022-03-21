import React from "react";
import { Item } from "../projects/database";

const CardView = (props: Item) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-context" >
                    <div className="xxx" >
                        <img src={props.img_url} alt="project picture" />
                    </div>
                    <p><strong>Name:</strong> {props.name}</p>
                    <p><strong> Tech stack:</strong> {props.tech_stack}</p>
                    <a href={props.src_code_link}>Go to source code</a>
                </div>
            </div>
        </React.Fragment >
    );
}

export default CardView