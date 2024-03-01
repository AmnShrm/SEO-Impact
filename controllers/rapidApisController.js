const leftPart = async (req, res, url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.redirectChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/redirect-checker?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.wordpressThemeDetector = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/wordpress-theme-detector?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.pageSizeChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/page-size-checker?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.getHttpHeaders = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/get-http-headers?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.openGraphChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/open-graph-checker?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.metaTagsAnalyzer = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/meta-tags-analyzer?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.keywordRankChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/keyword-rank-checker?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.keywordDensityChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/keyword-density-checker?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.domainLookup = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/whois-domain-lookup/${targetUrl}`;
  leftPart(req, res, url);
};

exports.domainToIP = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/domain-to-ip?url=${targetUrl}`;
  leftPart(req, res, url);
};

exports.domainAgeChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/domain-age-checker/${targetUrl}`;
  leftPart(req, res, url);
};

exports.hostingChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `https://seo-api2.p.rapidapi.com/hosting-checker?url=${targetUrl}`;
  leftPart(req, res, url);
};
