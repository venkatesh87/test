const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Aasaan',
        titleDescription: 'Create an online store for free | sell on instagram | WhatsApp | Facebook | TikTok | Youtube',
        REACT_APP_API_BASE_URL:"https://service.lightbooks-dev.io"
    },
};

module.exports = nextSettings;
