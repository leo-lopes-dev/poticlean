// PARA O SEO
// schemaMarkup.js
function generateSchemaMarkup() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "POTI CLEAN",
    "description": "Empresa potiguar especializada em serviços de limpeza a seco de sofás, colchões, poltronas e higienização automotiva",
    "image": window.location.origin + "/assets/img/logo.png",
    "@id": window.location.origin,
    "url": window.location.origin,
    "telephone": "+5584991356280",
    "email": "poticleanoficial@gmail.com",
    "priceRange": "$$",
    
    // Serviços oferecidos (SEO local)
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Limpeza",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de estofados e poltronas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de estofados em couro"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lavagem de tapetes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de colchões"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Higienização de interiores de automóveis"
          }
        }
      ]
    },
    
    // Redes sociais
    "sameAs": [
      "https://www.instagram.com/poticleanoficial/",
    ],
    
    // Área de atuação
    "areaServed": {
      "@type": "State",
      "name": "Rio Grande do Norte",
      "sameAs": "https://en.wikipedia.org/wiki/Rio_Grande_do_Norte"
    }
  };
}

function injectSchemaMarkup() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateSchemaMarkup());
  document.head.appendChild(script);
}

// Executa quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSchemaMarkup);
} else {
  injectSchemaMarkup();
}