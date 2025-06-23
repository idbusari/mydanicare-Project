import React from "react";
import styles from "./post.module.scss";

export default function ShareButtons({ url, title, excerpt }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(stripHtml(excerpt || ''));

  return (
    <div className={styles.shareButtons}>
      <div className={styles.label}>Share this post:</div>
      <div className={styles.links}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle} - ${encodedExcerpt}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle} - ${encodedExcerpt}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter/X
        </a>

        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedExcerpt}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on LinkedIn
        </a>

        <a
          href={`https://wa.me/?text=${encodedTitle} - ${encodedExcerpt} ${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on WhatsApp
        </a>
      </div>
    </div>
  );
}

// Optional utility function to strip any HTML from excerpt
function stripHtml(html) {
  return html.replace(/<[^>]*>?/gm, '');
}