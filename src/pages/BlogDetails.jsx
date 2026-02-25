import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const API = "https://backend-prime-home-care.onrender.com/api/blogs";

/* ================= LAYOUT ================= */

const Page = styled.div`
  background: #f9fbfd;
  min-height: 100vh;
  padding-bottom: 80px;
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 20px;
  cursor: pointer;

  span {
    color: #0077b6;
    font-weight: 500;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 20px;
  color: #111;
`;

const Meta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 18px;
  margin: 30px 0 40px 0;
  object-fit: cover;
`;

const Divider = styled.div`
  height: 1px;
  background: #e6e6e6;
  margin: 40px 0;
`;

/* ================= CONTENT ================= */

const Content = styled.div`
  font-size: 18px;
  line-height: 1.9;
  color: #333;

  h1, h2, h3 {
    margin-top: 40px;
    margin-bottom: 15px;
    font-weight: 700;
    color: #111;
  }

  p {
    margin-bottom: 22px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    font-weight: 700;
  }

  blockquote {
    border-left: 4px solid #0077b6;
    padding-left: 15px;
    color: #555;
    font-style: italic;
    margin: 30px 0;
  }
`;

/* ================= RELATED ================= */

const RelatedSection = styled.div`
  margin-top: 80px;
`;

const RelatedTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.12);
  }
`;

const CardTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: #666;
`;

/* ================= COMPONENT ================= */

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`${API}/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);

        fetch(API)
          .then(res => res.json())
          .then(all => {
            const filtered = all
              .filter(b => b.slug !== slug)
              .slice(0, 3);
            setRelated(filtered);
          });
      })
      .catch(err => console.log(err));
  }, [slug]);

  if (!blog) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  const formattedDate = new Date(blog.createdAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const readingTime = Math.ceil(
    blog.content.replace(/<[^>]+>/g, "").split(" ").length / 200
  );

  return (
    <Page>
      <Wrapper>

        <Breadcrumb onClick={() => navigate("/blogs")}>
          ← <span>Back to Blogs</span>
        </Breadcrumb>

        <Title>{blog.title}</Title>

        <Meta>
          <div>By {blog.author || "Admin"}</div>
          <div>•</div>
          <div>{formattedDate}</div>
          <div>•</div>
          <div>{readingTime} min read</div>
        </Meta>

        {blog.image && (
          <HeroImage src={blog.image} alt={blog.title} />
        )}

        <Content
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

        <Divider />

        <RelatedSection>
          <RelatedTitle>Related Articles</RelatedTitle>

          <RelatedGrid>
            {related.map(item => (
              <Card
                key={item._id}
                onClick={() => navigate(`/blog/${item.slug}`)}
              >
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>
                  {item.description?.substring(0, 100)}...
                </CardDesc>
              </Card>
            ))}
          </RelatedGrid>
        </RelatedSection>

      </Wrapper>
    </Page>
  );
};

export default BlogDetails;