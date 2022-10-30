import React from 'react'
import Iframe from 'react-iframe';
import { useParams } from 'react-router-dom';

const Trailer = ({movies}) => {
    const {id}=useParams()
    const movie=movies.find((el)=>el.id==id)


  return (
    <div className='cont'>
      <div className='trlr'>
      <Iframe width='1000px' height='600px' src={movie.trailer}></Iframe>
      </div>
    </div>
  )
}

export default Trailer