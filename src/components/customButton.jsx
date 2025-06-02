import React from 'react';
import styled from 'styled-components';

const CustomButton = ({text, icon, url}) => {
    const openLink = (path) => window.open(path, '_blank');
    return (
        <StyledWrapper onClick={() => openLink(url)} className="custom-button">
            <div className="button-icon">
                <div className="icon"> {icon} </div>
                <div className="cube">
                    <span className="side front">{text}</span>
                    <span className="side top">{`check it on ${text}`}</span>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .button-icon {
        display: flex;
        border: 3px #00000000 solid;
        width: fit-content;
        height: fit-content;
        cursor: pointer;
    }

    .icon {
        background-color: #00000000;
        padding: 10px 10px 5px 10px;
    }

    .icon svg {
        width: 25px;
        height: 25px;
    }

    .cube {
        transition: all 0.4s;
        transform-style: preserve-3d;
        width: 200px;
        height: 20px;
    }

    .button-icon:hover {
        border-color: #00000000;
    }

    .button-icon:hover .cube {
        transform: rotateX(90deg);
    }

    .side {
        position: absolute;
        height: 47px;
        width: 200px;
        display: flex;
        font-size: 0.8em;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: bold;
    }

    .top {
        background: #ff98a2;
        color: #fff;
        transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
    }

    .front {
        background: #222229;
        color: #fff;
        transform: translate3d(0, 0, 1em);
    }`;

export default CustomButton;
