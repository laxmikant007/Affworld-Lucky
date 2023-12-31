import React from 'react'
import { Form } from 'react-bootstrap'

/**
* @author
* @function Input
**/

const Input = (props) => {
  return (
    <>
      <Form.Group style={{ marginBottom: "1rem" }} controlId={props.controlId} >
        <Form.Label>{props.title} </Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} required={props.required} name={props.name} />
        <Form.Text className="text-muted">
        {props.message}
        </Form.Text>
      </Form.Group>
    </>
  )
}


export default Input