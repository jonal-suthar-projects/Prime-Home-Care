import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from "../components/common/PageHeader";

const API = "https://backend-prime-home-care.onrender.com/api/blogs";

/* ================= STYLES ================= */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
`;

const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
`;

const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedContent = styled.div`
  padding: 40px;
`;

const FeaturedTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const FeaturedDesc = styled.p`
  font-size: 17px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
`;

const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  cursor: pointer;
  background: #fff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 24px;
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
  color: #222;
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const Meta = styled.p`
  font-size: 13px;
  color: #888;
`;

/* ================= COMPONENT ================= */

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Filter blogs that have slug
          // const validBlogs = data.filter(blog => blog.slug);
          setBlogs(validBlogs);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log("Error fetching blogs:", err);
        setBlogs([]);
        setLoading(false);
      });
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadingTime = (content) => {
    if (!content) return 1;
    const text = content.replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  const handleNavigation = (slug) => {
    if (!slug) return;
    navigate(`/blog/${slug}`);
  };

  if (loading) {
    return (
      <Container>
        <h2 style={{ textAlign: "center" }}>Loading blogs...</h2>
      </Container>
    );
  }

  if (!blogs.length) {
    return (
      <>
        <PageHeaderContainer>
          <PageTitle>Blogs</PageTitle>
          <PageSubtitle>
            Insights, updates and stories from Prime Home Care
          </PageSubtitle>
        </PageHeaderContainer>

        <Container>
          <h2 style={{ textAlign: "center" }}>
            No blogs available yet
          </h2>
        </Container>
      </>
    );
  }

  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHeaderContainer>
        <PageTitle>Blogs</PageTitle>
        <PageSubtitle>
          Insights, updates and stories from Prime Home Care
        </PageSubtitle>
      </PageHeaderContainer>

      <Container>

        {/* ===== Featured Blog ===== */}
        {featured && (
          <FeaturedCard onClick={() => handleNavigation(featured.slug)}>
            <FeaturedImg
              src={featured.image || "https://picsum.photos/800/600"}
              alt={featured.title}
            />
            <FeaturedContent>
              <FeaturedTitle>{featured.title}</FeaturedTitle>

              {featured.description && (
                <FeaturedDesc>
                  {featured.description.substring(0, 180)}...
                </FeaturedDesc>
              )}

              <Meta>
                By {featured.author || "Admin"} •{" "}
                {formatDate(featured.createdAt)} •{" "}
                {calculateReadingTime(featured.content)} min read
              </Meta>
            </FeaturedContent>
          </FeaturedCard>
        )}

        {/* ===== Other Blogs ===== */}
        <Grid>
          {rest.map(blog => (
            <Card
              key={blog._id}
              onClick={() => handleNavigation(blog.slug)}
            >
              <Img
                src={blog.image || "https://picsum.photos/600/400"}
                alt={blog.title}
              />

              <Content>
                <Title>{blog.title}</Title>

                {blog.description && (
                  <Description>
                    {blog.description.substring(0, 120)}...
                  </Description>
                )}

                <Meta>
                  By {blog.author || "Admin"} •{" "}
                  {formatDate(blog.createdAt)} •{" "}
                  {calculateReadingTime(blog.content)} min read
                </Meta>
              </Content>
            </Card>
          ))}
        </Grid>

      </Container>
    </>
  );
};

export default Blogs;