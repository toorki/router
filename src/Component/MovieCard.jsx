import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ReactStars from 'react-stars'
import {Link} from'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <div>
        <Card className='crd' style={{ width: '350px', height:'700px' }}>
            <Card.Img ClassName='img' variant="top" src={movie.posterUrl} style={{height:'400px'}} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <ReactStars
            count={5}
            edit={false}
            value={movie.rate}
            size={24}
            color2={'#ffd700'} />
            <Link to={`/trailer/${movie.id}`}>
                <Button variant="primary">Trailer</Button>
            </Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default MovieCard