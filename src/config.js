let baseUrl = 'http://localhost:5000/api';

if (window.location.host === 'sindoor-dev.falconweb.app') {
  baseUrl = 'https://sindoor-api-dev.falconweb.app/api';
} else if (window.location.host === 'sindoor-qa.falconweb.app') {
  baseUrl = 'https://sindoor-api-qa.falconweb.app/api';
} else if (window.location.host === 'realestate-admin-staging.falconweb.app') {
  baseUrl = 'https://realestate-api-staging.falconweb.app/api';
} else if (window.location.host === 'sindoor.app') {
  baseUrl = 'https://api.sindoor.app/api';
}

module.exports = { baseUrl };
