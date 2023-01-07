
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Row, Col, FormGroup, Label, Button, FormFeedback, UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Table } from 'reactstrap';
import Swal from 'sweetalert2';






export default function Contacto() {
    let refMenu = useRef();



    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensajeNombre, setMensajeNombre] = useState('');
    const [mensajeCorreo, setMensajeCorreo] = useState('');
    const [mensajeAsunto, setMensajeAsunto] = useState('');
    const [invalidNombre, setInvalidNombre] = useState(false);
    const [invalidCorreo, setInvalidCorreo] = useState(false);
    const [invalidAsunto, setInvalidAsunto] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const EnviarFormulario = (e) => {

        e.preventDefault();
        let valido = true;


        if (nombre === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes Completar Todos los Campos!',

            })
            setInvalidNombre(true)
            setMensajeNombre('El Campo nombre es Obligatorio, Indica Tu  Nombre')

        } else {
            setInvalidNombre(false)
            setMensajeNombre('')
        }

        if (correo === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes Completar Todos los Campos!',

            })
            setInvalidCorreo(true)
            setMensajeCorreo('Debe Indicar un Correo Valido')

            valido = false;

        } else {
            setInvalidCorreo(false)
            setMensajeCorreo('')
        }
        if (asunto === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes Completar Todos los Campos!',

            })
            setInvalidAsunto(true)
            setMensajeAsunto('Debe Ingresar Un Asunto')

            valido = false;

        } else {
            setInvalidAsunto(false)
            setMensajeAsunto('')
        }
        if (valido) {

            Swal.fire({
                icon: 'success',
                title: "Su Mensaje Fue Enviado Correctamente",
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Bien Hecho!'

            })



            

           
        }

        setIsSend(true)

       // setUser({...ValorInicial}) // copia de valor incial 


    }

    
    
    

    return <>

        <div className="container-fluid Contacto animate__animated animate__fadeIn" id="Componente_Footer">



            <div className="text-left col-md-6 m-2">
                <Link to="/AnimacionContacto"><button type="button" className="Boton_Contacto_2 border-0 col-md-2 p-2 rounded"> Volver</button></Link>
            </div>




            <h2 className="Tit-Form col-md-12">Formulario</h2>
            <Row className="col-md-6">

                <Col xs="1"></Col>
                <Col xs="12">

                    <Form className="col-md-12 text-white" ref={refMenu} onSubmit={EnviarFormulario}>
                        <FormGroup>
                            <Label className="label-Form" ><b>Nombre</b></Label>
                            <Input className="text-center" type="text" name="nombre" placeholder="" value={nombre} onChange={(e) => setNombre(e.target.value)} valid={isSend && !invalidNombre} invalid={isSend && invalidNombre}></Input>
                            <FormFeedback>{mensajeNombre}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label className="label-Form" ><b>Correo</b></Label>
                            <Input className="text-center" type="email" name="correo" placeholder="" value={correo} onChange={(e) => setCorreo(e.target.value)} valid={isSend && !invalidCorreo} invalid={invalidCorreo}></Input>
                            <FormFeedback>{mensajeCorreo}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label className="label-Form" ><b>Asunto</b></Label>
                            <Input className="p-3 text-center" type="textarea" name="Asunto" placeholder="" value={asunto} onChange={(e) => setAsunto(e.target.value)} valid={isSend && !invalidAsunto} invalid={invalidAsunto}></Input>
                            <FormFeedback>{mensajeAsunto}</FormFeedback>

                        </FormGroup>
                        <FormGroup>
                            <Button className="Boton_Contacto_2 border-0 col-md-6">Enviar</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>



        </div>






    </>

}




