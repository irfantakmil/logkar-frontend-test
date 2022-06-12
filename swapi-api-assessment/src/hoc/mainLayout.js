import React from 'react';
import {Container} from 'react-bootstrap';
import "../styles/App.css";

const MainLayout = (props) => {
    return (
        <div id="main">
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default MainLayout;