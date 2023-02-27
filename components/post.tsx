import Link from 'next/link';
import { PostData } from '../types/postdata';
import styles from '../styles/post.module.css';

export default function Post({ title, body, id }: PostData) {
  return (
    <article>
      <h2 className={styles.title}>{title}</h2>
      <p>{body}</p>
      <Link className={styles.readMore} href={`/post/${id}`}>
        Read more ⇾
      </Link>
    </article>
  );
}
