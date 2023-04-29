import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import { getArticles } from './api/articles';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Important Articles
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const articles = getArticles();

  return {
    props: { title: 'Articles', articles},
    revalidate: 60,
  };
}

export default ArticlesPage;
