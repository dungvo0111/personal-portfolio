import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Content(props) {
    return (
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col md={8}>
                {props.children}
                </Col>
            </Row>
        </Container>
    )
}
