import Article from "./Article.js";

function ArticleList({ posts }) {
  const articleTime = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  console.log(articleTime);

  return <main>{articleTime}</main>;
}

export default ArticleList;
