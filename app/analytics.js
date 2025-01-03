// analytics.js
export const GA_MEASUREMENT_ID = "G-BVBHZ1NWSN"; // Replace with your Measurement ID

// Function to initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window !== "undefined" && !window.gtagInitialized) {
    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    window.gtagInitialized = true;
  }
};
