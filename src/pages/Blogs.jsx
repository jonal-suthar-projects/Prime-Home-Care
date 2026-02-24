import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from "../components/common/PageHeader";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  background: ${({ theme }) => theme.cardBg};
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Meta = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend-prime-home-care.onrender.com/api/blogs")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBlogs(data);
        else setBlogs([]);
      })
      .catch(err => {
        console.log(err);
        setBlogs([]);
      });
  }, []);

  return (
    <>
      <PageHeaderContainer>
        <PageTitle>Blogs</PageTitle>
        <PageSubtitle>
          Insights, updates and stories from Prime Home Care
        </PageSubtitle>
      </PageHeaderContainer>

      <Container>
        {blogs.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>
            No blogs available yet
          </h2>
        ) : (
          <Grid>
            {blogs.map(blog => (
              <Card
                key={blog._id}
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                <Img
                  src={
                    blog.image ||
                    "https://picsum.photos/600/400"
                  }
                  alt={blog.title}
                />

                <Content>
                  <Title>{blog.title}</Title>
                  <Meta>
                    By {blog.author || "Admin"} • {blog.date}
                  </Meta>
                </Content>
              </Card>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Blogs;