import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCharacters } from '../../store/actions/mainActions';
import { Card, Row, Col} from "react-bootstrap";

const Characters = () => {
    const swapi = useSelector(state=>state.swapi);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCharacters())
    },[dispatch])

    return (
        <>
            <div id="characters">
                <Row xs={1} md={5} className="g-4">
                {
                    swapi && swapi.characters ?
                        swapi.characters.map((item)=>(
                            <div className="character-card">
                                
                                    <Col>
                                        <Card style={{width: '18rem', backgroundColor:"black"}}>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                Height: {item.height}
                                                <br/>
                                                Gender: {item.gender}
                                                <br/>
                                                Mass : {item.mass}
                                                <br/>
                                                Birth year: {item.birth_year}
                                            </Card.Text>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                
                            </div>
                        ))
                    : null
                }
                </Row>
            </div>
        </>
    )
}

export default Characters