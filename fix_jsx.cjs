const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Remove doctype
content = content.replace(/<\s*!\s*DOCTYPE\s+html\s*>/i, '');

// 2. fix self closing tags (meta, link, img, input, hr, br)
content = content.replace(/<(meta|link|img|input|hr|br)([^>]*?)(?<!\/)>/g, '<$1$2 />');

// 3. Convert styles to objects
content = content.replace(/style="background-image:\s*url\('([^']+)'\);?"/g, `style={{ backgroundImage: "url('$1')" }}`);
content = content.replace(/style="border:\s*0;?"/g, `style={{ border: 0 }}`);

// 4. class to className
content = content.replace(/class="/g, 'className="');

// 5. stroke-width, stroke-linecap, stroke-linejoin
content = content.replace(/stroke-width/g, 'strokeWidth');
content = content.replace(/stroke-linecap/g, 'strokeLinecap');
content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');

// 6. Fix style tag
content = content.replace(/<style>([\s\S]*?)<\/style>/g, `<style dangerouslySetInnerHTML={{__html: \`$1\`}} />`);

// 7. Fix script tag for JSON-LD
content = content.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: \`$1\`}}></script>`);

// 8. Remove tailwind script tag as it's better handled in index.html, but let's just make it a comment
content = content.replace(/<script src="([^"]+)"><\/script>/g, `{/* <script src="$1"></script> */}`);

// 9. Fix closing script tag that had manual logic
content = content.replace(/<script>([\s\S]*?)<\/script>/g, `\n{/* \n<script>\n$1\n</script>\n */}\n`);

// Wrap the whole thing in a component
const finalContent = `import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <>
${content}
    </>
  );
}
`;

fs.writeFileSync('src/App.jsx', finalContent, 'utf8');
console.log('Fixed JSX syntax!');
