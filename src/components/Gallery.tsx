import React from "react";
import CardView from "./Cardview";
import database from "../data/database";

const Gallery: React.FC = () => {
    return (
        <React.Fragment>
            <div className="gallery">
                {
                    database.database.map((item) => {
                        return (
                            <CardView key={item.id}  {...item} ></CardView>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Gallery