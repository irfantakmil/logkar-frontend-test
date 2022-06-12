import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPlanets } from '../../store/actions/mainActions';
import { Card, Row, Col} from "react-bootstrap";

const Planets = () => {
    const swapi = useSelector(state=>state.swapi);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPlanets())
    },[dispatch])
    
    
    return (
        <>
             <div id="planets">
                <Row xs={1} md={5} className="g-4">
                {
                    swapi && swapi.planets ?
                        swapi.planets.map((item)=>(
                            <div className="planet-card">
                                
                                    <Col>
                                        <Card style={{width: '18rem', backgroundColor:"black"}}>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                Diameter: {item.diameter}
                                                <br/>
                                                Climate: {item.climate}
                                                <br/>
                                                Terrain : {item.terrain}
                                                <br/>
                                                Population: {item.population}
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

export default Planets;