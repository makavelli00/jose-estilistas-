const fs = require('fs');

let html = fs.readFileSync('src/App.jsx', 'utf8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
const headTags = headMatch ? headMatch[1] : '';

// Extract <body> contents
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let bodyHtml = bodyMatch ? bodyMatch[1] : html;

// Separate styles from <head>
const styleMatch = headTags.match(/<style>([\s\S]*?)<\/style>/i);
const styles = styleMatch ? styleMatch[1] : '';

// Get JS scripts and links to inject in index.html
const scriptSrcsMatch = headTags.match(/<script\s+src="[^"]+"[^>]*>.*?<\/script>/gi);
const linkTagsList = headTags.match(/<link[^>]+>/gi);

// Extract the application/ld+json script for SEO
const jsonLdMatch = headTags.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = jsonLdMatch ? jsonLdMatch[0] : '';


let jsxHtml = bodyHtml
  .replace(/class="/g, 'className="')
  .replace(/for="/g, 'htmlFor="')
  .replace(/stroke-width="/g, 'strokeWidth="')
  .replace(/stroke-linecap="/g, 'strokeLinecap="')
  .replace(/stroke-linejoin="/g, 'strokeLinejoin="')
  .replace(/<img(.*?)>/g, (match, p1) => `<img${p1.replace(/\s*\/$/, '')} />`)
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<input([^>]+)>/g, (match, p1) => `<input${p1.replace(/\s*\/$/, '')} />`)
  .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
  .replace(/style="border:0;"/g, 'style={{ border: 0 }}')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ''); // removing script tags from body

fs.writeFileSync('src/App.jsx', `import React from 'react';

export default function App() {
  return (
    <>
      ${jsxHtml}
    </>
  );
}
`);

fs.appendFileSync('src/index.css', '\n' + styles + '\nhtml { scroll-behavior: smooth; }\n');

let indexHtml = fs.readFileSync('index.html', 'utf8');
// remove existing tailwind or lucide if they exist, but they don't
let toInject = '';
if (scriptSrcsMatch) toInject += scriptSrcsMatch.join('\n') + '\n';
if (linkTagsList) toInject += linkTagsList.join('\n') + '\n';
if (jsonLd) toInject += jsonLd + '\n';

indexHtml = indexHtml.replace('</head>', toInject + '</head>');
indexHtml = indexHtml.replace('<body>', '<body class="bg-dark-premium text-gray-200">');

fs.writeFileSync('index.html', indexHtml);

console.log('Conversion successful!');
