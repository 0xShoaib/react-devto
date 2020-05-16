import React, { useState, useEffect } from "react";

const Article = ({ name }) => {
  const [articles, setArticles] = useState([]);

  let articleWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
    height: "max-content",
    padding: "20px",
    margin: "0 auto",
  };

  let articleCard = {
    maxWidth: "350px",
    minHeight: "300px",
    textAlign: "center",
    borderRadius: "5px",
    margin: "20px",
    boxShadow: "0px 0px 30px 0.2px rgba(0, 0, 0, 0.2)",
    boxSizing: "border-box",
  };

  let articleLink = {
    textDecoration: "none",
    color: "#000",
  };

  let articleImageWrapper = {
    width: "inherit",
  };

  let articleImage = {
    width: "100%",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };

  let articleBody = {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    padding: "0 10px 20px 10px",
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: "130px",
  };

  let articleTitle = {
    fontSize: "24px",
    letterSpacing: "1.2px",
  };

  let articleStatsWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  let articleStats = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  };

  let svgContainer = {
    margin: "10px",
  };

  let svg = {
    marginRight: "8px",
    verticalAlign: "middle",
  };

  let span = {
    fontWeight: "400",
  };

  let published = {
    color: "#666",
    margin: "0 10px",
  };

  const fetchArticles = (username) => {
    let url = "https://dev.to/api/articles?username=" + username;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const articleData = result.map((item) => {
          return {
            id: item.id,
            url: item.url,
            imgSrc: item.cover_image,
            title: item.title,
            likes: item.positive_reactions_count,
            comments: item.comments_count,
            publishedDate: item.readable_publish_date,
          };
        });
        setArticles(articleData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (name !== undefined) {
      fetchArticles(name);
    }
  }, [name]);

  const createArticle = articles.map((item) => {
    return (
      <div style={articleCard} key={item.id}>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={articleLink}
        >
          <div style={articleImageWrapper}>
            <img src={item.imgSrc} style={articleImage} alt="Article" />
          </div>
          <div style={articleBody}>
            <h1 style={articleTitle}>{item.title}</h1>
            <div style={articleStatsWrapper}>
              <div style={articleStats}>
                <div style={svgContainer}>
                  <svg
                    style={svg}
                    width="23"
                    height="21"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9996 18.0541C-9 7 4.99999 -5 10.9996 2.58806C17 -5 31 7 10.9996 18.0541Z"
                      fill="#f62e4b"
                    />
                  </svg>
                  <span style={span}>{item.likes}</span>
                </div>
                <div style={svgContainer}>
                  <svg
                    style={svg}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V16.5858L4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H3ZM0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H17C17.7957 0 18.5587 0.31607 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V13C20 13.7957 19.6839 14.5587 19.1213 15.1213C18.5587 15.6839 17.7957 16 17 16H5.41421L1.70711 19.7071C1.42111 19.9931 0.990991 20.0787 0.617317 19.9239C0.243642 19.7691 0 19.4045 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868Z"
                      fill="#263145"
                    />
                  </svg>
                  <span style={span}>{item.comments}</span>
                </div>
              </div>
              <p style={published}>Published: {item.publishedDate}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div style={articleWrapper}>
      {articles.length !== 0 ? createArticle : null}
    </div>
  );
};
export default Article;
