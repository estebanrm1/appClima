import { Col, Form, FormControl, FormGroup, Row, Button } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import ResultadoClima from "./ResultadoClima";

const FormClima = () => {

    const [ubicacion, setUbicacion] = useState("");
    const [clima, setCLima] = useState({});
    const [mostrarSpinner, setMostrarSpinner] = useState(true);

    useEffect(() => {
        consultarAPI();
    }, []);


    const consultarAPI = async () => {
        try {
            setMostrarSpinner(true);
            const pedido = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion || "Tucuman"
                }&appid=981b2c09e634931507684c3ed27d1675&units=metric&lang=es`);
            const resultado = await pedido.json();
            setCLima(resultado);
            setMostrarSpinner(false);
        } catch (error) {
            console.log(error);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (ubicacion.trim() !== "") {
            consultarAPI();
        } else {
            Swal.fire({
                icon: "warning",
                title: "Ubicacion Inválida",
                text: "Debes ingresar una ubicación",
                iconColor: "#3b71ca",
                confirmButtonColor: "#3b71ca"
            });
        }
        setUbicacion("");
    };

    const componenteRenderizado = mostrarSpinner ? (
        <div className="m-5">
            <Spinner animation="grow" />
        </div>
    ) : (
        <ResultadoClima clima={clima} />
    )

    return (

        <>
            <Row className="mx-0 justify-content-md-center py-5">
                <Col md='auto' className="bg-succes bg-opacity-25 bg-primary border border-primary rounded">
                    <Form className="m-3 text-center" onSubmit={handleSubmit}>
                        <FormGroup className="my-3" >
                            <FormControl type="text" placeholder="Ingrese una ciudad" value={ubicacion}
                                required
                                onChange={(e) => {
                                    setUbicacion(e.target.value);
                                }}>
                            </FormControl>
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            <i className="bi bi-search">Clima actual</i>
                        </Button>
                    </Form>
                </Col>
            </Row>
            <div className="d-flex justify-content-center">
            {componenteRenderizado}
            </div>
        </>
    );
};

export default FormClima;