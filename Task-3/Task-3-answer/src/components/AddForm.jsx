import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../reducers/postsCRUDSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const postsCRUD = useSelector((state) => state.postsCRUD)
  
  const dispatch = useDispatch();

  const postInfo = {
    title: title,
    body: body,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(addPosts(postInfo));

      if (addPosts.fulfilled.match(result)) {
        alert("Add Success!");
      }

      if (addPosts.rejected.match(result)) {
        alert("Try Again");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Post Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter post title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Post body</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter post body"
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </Form>
  );
};

export default AddForm;
