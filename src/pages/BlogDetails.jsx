import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
`;

const Meta = styled.p`
  color: gray;
  margin: 10px 0 20px 0;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
  color: white;
`;

const Content = styled.p`
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-line;
  color: white;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
`;

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => res.json())
      .then(setBlog)
      .catch(console.error);
  }, [id]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <Container>
      <button onClick={() => navigate(-1)}>← Back</button>

      <Title>{blog.title}</Title>

      <Meta>
        By {blog.author || "Admin"} • {blog.date}
      </Meta>

      {blog.image && <Img src={blog.image} alt={blog.title} />}

      {blog.description && <Description>{blog.description}</Description>}

      <Content>{blog.content}</Content>
    </Container>
  );
};

export default BlogDetails;