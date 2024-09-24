import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../reducers/postsCRUDSlice";
import PostForm from "../components/PostForm";

const PostListing = () => {
  const dispatch = useDispatch();

  const postsCRUD = useSelector((state) => state.postsCRUD);
  const { posts, isLoading, error } = postsCRUD;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) return <h2 className="text-center">Data is Loading</h2>;
  if (error) return <p>Please wait and Try again</p>;

  return (
    <Container fluid="md">
      <PostForm name="Add Post" />
      <Row xs={1} md={3} className="g-4 mt-4">
        {posts.map((post) => {
          return (
            <Col key={post.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PostListing;
