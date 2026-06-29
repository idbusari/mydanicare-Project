import Image from "next/image";
import "./SocialMediaRow.scss";

const SocialMediaRow = () => {
  return (
    <div className="social-media-row">
      <a href="https://www.facebook.com/danicarepsychiatry" target="_blank" rel="noopener noreferrer">
        <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Image src="/images/X.svg" alt="Twitter" width={24} height={24} className="social-icon" />
      </a>
      <a href="https://www.instagram.com/danicarepsychiatry/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/company/danicare-psychiatry" target="_blank" rel="noopener noreferrer">
        <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} className="social-icon" />
      </a>
      <a href="https://www.youtube.com/channel/UC4jl96PJxHQJKHd0-CRl0mg" target="_blank" rel="noopener noreferrer">
        <Image src="/images/youtube.svg" alt="YouTube" width={24} height={24} className="social-icon" />
      </a>
      <a href="https://g.page/r/CbL7GF2HZ0LwEBM/review" target="_blank" rel="noopener noreferrer">
        <Image src="/images/google.svg" alt="Google" width={24} height={24} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMediaRow;
