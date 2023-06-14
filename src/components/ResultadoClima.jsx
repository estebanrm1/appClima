import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ResultadoClima = ({clima}) => {


    let ciudad = clima.name;
    let descripcion = clima.weather[0].description;
    let temperatura = clima.main.temp;
    let humedad = clima.main.humidity;
    let viento = (clima.wind.speed * 3.6).toFixed(2);



    return (
        <Card style={{ width: '18rem' }} className='bg-light bg-opacity-50 border-primary'>
            <Card.Body>
                <Card.Title>{ciudad}</Card.Title>
                <Card.Text>Descripción: <strong>{descripcion}</strong>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Temperatura: {temperatura}º🌡</ListGroup.Item>
                <ListGroup.Item>Humedad: {humedad}%</ListGroup.Item>
                <ListGroup.Item>Viento: {viento}m/s🪁</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default ResultadoClima;