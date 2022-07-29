import React, { FormEvent, ReactEventHandler } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

interface SearchProps {
    getPokemon: Function
}

const Search = (props: SearchProps) => {
    const { getPokemon } = props
    const [search, setSearch] = useState<string>("")

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getPokemon(search);
    };

    return (
        <Container>
            <Form className='mt-2' onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col sm={10} className="my-1">
                        <Form.Control placeholder="Search for pokemon..." onChange={(e) => setSearch(e.target.value)} />
                    </Col>
                    <Col sm={2} className="my-2">
                        <Button type="submit">PokeGo!</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Search