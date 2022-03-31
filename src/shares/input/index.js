import React from 'react'
import { Form } from 'react-bootstrap'

const Input = (props) => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} autoComplete={props.autoComplete}  required={props.required} {...props.register}  />
            <Form.Text className="text-muted">
                {props.errorMsg}
            </Form.Text>
        </Form.Group>
    )
}

export default Input
