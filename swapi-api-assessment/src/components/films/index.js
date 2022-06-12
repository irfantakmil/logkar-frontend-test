import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFilms } from '../../store/actions/mainActions';

const Films = () => {
    const swapi = useSelector(state=>state.swapi);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getFilms())
    },[dispatch])

     //console.log(swapi.films.title)
    
    return (
        <>
            <div id='films'>
                <div className='original'>
                    <h2>
                        <u>Original Trilogy</u>
                    </h2>
                        {
                            swapi && swapi.films ?
                                swapi.films.filter((item)=>item.episode_id > 3).map((item)=>(
                                    <div className='film-container'>
                                        <h3>Episode {item.episode_id}: {item.title} - {item.release_date}</h3>
                                    </div>
                                ))
                            : null
                        }
                    </div>
                <h2>
                    <div className='prequel'>
                        <h2>
                            <u>Prequel Trilogy</u>
                        </h2>
                        {
                            swapi && swapi.films ?
                                swapi.films.filter((item)=>item.episode_id < 4).map((item)=>(
                                    <div className='film-container'>
                                        <h3>Episode {item.episode_id}: {item.title} - {item.release_date}</h3>
                                    </div>
                                ))
                            : null
                        }
                    </div>
                </h2>
            </div>
        </>
    )
}

export default Films;