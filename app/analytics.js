// gtm.js - New implementation using Google Tag Manager
export const GTM_ID = "GTM-PN7M6L9W"; // Your GTM container ID

/**
 * Initializes Google Tag Manager and sets up the data layer
 * This replaces the direct gtag implementation
 */
export const initializeGTM = () => {
  if (typeof window !== "undefined" && !window.gtmInitialized) {
    // Initialize data layer
    window.dataLayer = window.dataLayer || [];
    
    // Main GTM script loader
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(script);

    // Noscript fallback
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    window.gtmInitialized = true;
  }
};

/**
 * Track custom events through GTM data layer
 * @param {string} eventName - The event name (e.g., 'button_click')
 * @param {object} eventData - Additional event parameters
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
};

window.dataLayer.push({
  event: 'form_submission',
  form_id: 'become_patient_form',
  // Add metrics like form value (if applicable)
  value: 100, // Example: Lead score or revenue
  currency: 'USD'
});

/**
 * Track page views for SPA (React Router)
 * @param {string} path - Current page path
 */
export const trackPageView = (path) => {
  trackEvent('page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href
  });
};