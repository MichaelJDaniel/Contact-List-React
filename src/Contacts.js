import React from "react";
import { Button, Table, } from "semantic-ui-react";
import Contact from "./Contact"

const Contacts = ({ unicorn, remove }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        unicorn.map( contact => ( 
          <Contact key={contact.id} {...contact} remove={remove}/>
            
        ))
      }
    </Table.Body>
  </Table>
);

export default Contacts;  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
