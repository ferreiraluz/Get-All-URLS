const cheerio = require('cheerio');
const request = require('request-promise');

async function getAllUrlsInDomain(domain) {
  const visitedUrls = new Set();
  const allUrls = [];

  async function crawl(url) {
    if (!visitedUrls.has(url)) {
      visitedUrls.add(url);
      try {
        const html = await request(url);
        const $ = cheerio.load(html);
        const links = $('a');
        links.each((index, element) => {
          const href = $(element).attr('href');
          if (href) {
            const absoluteUrl = new URL(href, url).href;
            if (absoluteUrl.startsWith(domain) && !visitedUrls.has(absoluteUrl)) {
              allUrls.push(absoluteUrl);
              crawl(absoluteUrl);
            }
          }
        });
      } catch (error) {
        console.error(`Error crawling ${url}: ${error}`);
      }
    }
  }

  await crawl(domain);

  return allUrls;
}

// Exemplo de uso
const domain = 'your url'; // Insira o domínio que deseja percorrer
getAllUrlsInDomain(domain)
  .then(urls => {
    console.log('URLs encontradas:');
    urls.forEach(url => console.log(url));
  })
  .catch(error => {
    console.error('Erro ao buscar URLs:', error);
  });
