import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import AddForm from "./AddForm";

const PostForm = ({name}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Post</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PostForm;
