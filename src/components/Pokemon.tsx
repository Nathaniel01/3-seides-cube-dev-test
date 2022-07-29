import { stat } from 'fs';
import React from 'react'
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';


export const Pokemon = (props: any) => {
    const { types, stats, abilities, name, sprites, savePokemon } = props

    const button_handler = (e: any) => {
        e.preventDefault()
        savePokemon(name)
    }

    return (
        <Container className='mt-2'>
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>{name}</h5>
                            <img src={sprites} alt={name} />
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h5> Abilities</h5>
                                    {abilities.map((_data: any, key: number) => (
                                        <div key={key}>
                                            <span>{_data.ability.name}</span>
                                        </div>
                                    ))}
                                    <br />
                                    <h5>Types</h5>
                                    {types.map((_data: any, key: number) => (
                                        <div key={key}>
                                            <span>{_data.type.name}</span>
                                        </div>
                                    ))}
                                </Col>
                                <Col>
                                    <h5>Power Levels</h5>
                                    {stats.map((_data: any, key: number) => (
                                        <div key={key}>
                                            <strong>{_data.stat.name}</strong>
                                            <ProgressBar now={_data.base_stat} max={255} label={_data.base_stat} />
                                        </div>
                                    ))}
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={button_handler}>Save Pokemon</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}