import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  display: flex;
  flex-direction: column;
`;

const ImageWrap = styled.div`
  height: 220px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 20px;
`;

const BlogTitle = styled.h3`
  margin-bottom: 10px;
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(setBlogs);
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
        <Grid>
          {blogs.map(blog => (
            <Card key={blog._id}>
              <ImageWrap>
                <Img src={blog.image} alt="blog" />
              </ImageWrap>
              <Content>
                <BlogTitle>{blog.title}</BlogTitle>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blogs;
