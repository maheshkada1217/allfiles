import React from "react";

const ExternalInfo = ({ code, tutorial }) => {
    return (
        <h6 className="text-center">
            <a href={tutorial} target="_blank" rel="noopener noreferrer">
                <span className="badge badge-danger mr-2 p-3">
                    Youtube Tuorial of this demo{" "}
                    <i className="fas fa-external-link-alt"></i>
                </span>
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer">
                <span className="badge badge-secondary mr-2 p-3">
                    Github Source Code{" "}
                    <i className="fas fa-external-link-alt"></i>
                </span>
            </a>
        </h6>
    );
};

export default ExternalInfo;
