import siteData from "@/data/siteData.json";

export default function jsonLDGenerator(type, project, url) {
  if (type === "project") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${project.title}"
        },
        "headline": "${project.displayTitle}",
        "description": "${project.description}",
        "image": {"/assets/cards/${project.title}.png"},
        "author": {
          "@type": "Person",
          "name": "${siteData.author}",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "${siteData.city}",
            "addressCountry": "${siteData.countrty}"
          }
        },
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "${siteData.author}",
      "logo": "${siteData.logo}",
      "url": "${siteData.url}",
      "description": "${siteData.description}",
       "address": {
          "@type": "PostalAddress",
          "addressLocality": "${siteData.city}",
          "addressCountry": "${siteData.countrty}"
        }
      }
    </script>`;
}
