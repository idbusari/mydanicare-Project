import './HeaderTop.scss'; 

const HeaderTop = () => {
  return (
    <header className="headerSec flex-column justify-content-center">
      <div className="d-flex justify-content-center gap-4">
        <p className="d-none d-md-flex gap-2 align-items-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </svg>
          <span>Monday to Friday: 8AM - 5PM</span>
        </p>
        <p className="d-none d-md-flex gap-2 align-items-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </svg>
          <span>Saturdays 10AM - 2PM</span>
        </p>
        <p className="d-none d-md-flex gap-2 align-items-center">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>Fax 956-697-7004</span>
        </p>
        <p className="d-flex gap-2 align-items-center callUs">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
          </svg>
          <a href="tel:+1 (956) 266-8476">+1 (956) 266-8476</a>
        </p>
      </div>
      {/* <span className="text-center headerInfo">(We accommodate after hour appointment upon request)</span> */}
    </header>
  );
};

export default HeaderTop;
