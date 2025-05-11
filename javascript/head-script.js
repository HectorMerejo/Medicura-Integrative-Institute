// Create and append meta tags
var metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaCharset);

var metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
document.head.appendChild(metaViewport);

// Set title
document.title = 'Medicura Integrative Institute';

var preloadStylesheet = document.createElement('link');
preloadStylesheet.rel = 'preload';
preloadStylesheet.as = 'style';
preloadStylesheet.href = '../styles.css';
preloadStylesheet.onload = function () {
  this.rel = 'stylesheet';
};
document.head.appendChild(preloadStylesheet);

// Fallback for older browsers
var noscriptFallback = document.createElement('noscript');
noscriptFallback.innerHTML = '<link rel="stylesheet" href="../styles.css">';
document.head.appendChild(noscriptFallback);

var preloadResponsive = document.createElement('link');
preloadResponsive.rel = 'preload';
preloadResponsive.as = 'style';
preloadResponsive.href = '../css/responsive.css';
preloadResponsive.onload = function () {
  this.rel = 'stylesheet';
};
document.head.appendChild(preloadResponsive);

var noscriptResponsive = document.createElement('noscript');
noscriptResponsive.innerHTML = '<link rel="stylesheet" href="../css/responsive.css">';
document.head.appendChild(noscriptResponsive);

// Create and append font links
var linkFonts1 = document.createElement('link');
linkFonts1.setAttribute('rel', 'preconnect');
linkFonts1.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(linkFonts1);

var linkFonts2 = document.createElement('link');
linkFonts2.setAttribute('rel', 'preconnect');
linkFonts2.setAttribute('href', 'https://fonts.gstatic.com');
linkFonts2.setAttribute('crossorigin', '');
document.head.appendChild(linkFonts2);

var linkFonts3 = document.createElement('link');
linkFonts3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
linkFonts3.setAttribute('rel', 'stylesheet');
document.head.appendChild(linkFonts3);

var linkFonts4 = document.createElement('link');
linkFonts4.setAttribute('rel', 'preconnect');
linkFonts4.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(linkFonts4);

var linkFonts5 = document.createElement('link');
linkFonts5.setAttribute('rel', 'preconnect');
linkFonts5.setAttribute('href', 'https://fonts.gstatic.com');
linkFonts5.setAttribute('crossorigin', '');
document.head.appendChild(linkFonts5);

var linkFonts6 = document.createElement('link');
linkFonts6.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
linkFonts6.setAttribute('rel', 'stylesheet');
document.head.appendChild(linkFonts6);

// Create and append favicon links
var linkFavicon1 = document.createElement('link');
linkFavicon1.setAttribute('rel', 'apple-touch-icon');
linkFavicon1.setAttribute('sizes', '180x180');
linkFavicon1.setAttribute('href', './favicon_io/apple-touch-icon.png');
document.head.appendChild(linkFavicon1);

var linkFavicon2 = document.createElement('link');
linkFavicon2.setAttribute('rel', 'icon');
linkFavicon2.setAttribute('type', 'image/png');
linkFavicon2.setAttribute('sizes', '32x32');
linkFavicon2.setAttribute('href', './favicon_io/favicon-32x32.png');
document.head.appendChild(linkFavicon2);

var linkFavicon3 = document.createElement('link');
linkFavicon3.setAttribute('rel', 'icon');
linkFavicon3.setAttribute('type', 'image/png');
linkFavicon3.setAttribute('sizes', '16x16');
linkFavicon3.setAttribute('href', './favicon_io/favicon-16x16.png');
document.head.appendChild(linkFavicon3);

// Create and append manifest link
var linkManifest = document.createElement('link');
linkManifest.setAttribute('rel', 'manifest');
linkManifest.setAttribute('href', '/site.webmanifest');
document.head.appendChild(linkManifest);

// Create and append script
var scriptPhotoReel = document.createElement('script');
scriptPhotoReel.setAttribute('src', 'javascript/photoReel.js');
scriptPhotoReel.setAttribute('defer', '');
document.head.appendChild(scriptPhotoReel);

// Create and append script
var scriptPhotoReel = document.createElement('script');
scriptPhotoReel.setAttribute('src', 'javascript/photoReelText.js');
scriptPhotoReel.setAttribute('defer', '');
document.head.appendChild(scriptPhotoReel);

// Create first <link> element for preconnecting to fonts.googleapis.com
var link1 = document.createElement("link");
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
document.head.appendChild(link1);

// Create second <link> element for preconnecting to fonts.gstatic.com with crossorigin attribute
var link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossOrigin = true;
document.head.appendChild(link2);

// Create third <link> element for linking the stylesheet
var link3 = document.createElement("link");
link3.rel = "stylesheet";
link3.href = "https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap";
document.head.appendChild(link3);