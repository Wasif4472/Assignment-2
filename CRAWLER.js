const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch and scrape headings from BBC website
async function fetchHeadings() {
  try {
    // Send GET request to the BBC website
    const response = await axios.get('https://www.bbc.com');

    // Load the HTML into Cheerio
    const $ = cheerio.load(response.data);

    // Select all heading elements (h1, h2, h3, etc.)
    const headings = [];
    $('h1, h2, h3, h4, h5, h6').each((index, element) => {
      headings.push($(element).text().trim());
    });

    // Display the headings
    console.log('Headings from BBC website:');
    headings.forEach((heading, index) => {
      console.log(`${index + 1}. ${heading}`);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Run the function
fetchHeadings();
