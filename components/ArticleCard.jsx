import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.articleContainer}>
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
      </div>
    </a>
    </div>
  );
};

export default ArticleCard;
