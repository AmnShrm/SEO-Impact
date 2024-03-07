const leftPart = async (req, res, url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST_1,
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
  const url = `${process.env.REDIRECTCHECKER}${targetUrl}`;
  leftPart(req, res, url);
};

exports.wordpressThemeDetector = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.WORDPRESSTHEMEDETECTOR}${targetUrl}`;
  leftPart(req, res, url);
};

exports.pageSizeChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.PAGESIZECHECKER}${targetUrl}`;
  leftPart(req, res, url);
};

exports.getHttpHeaders = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.GETHTTPHEADERS}${targetUrl}`;
  leftPart(req, res, url);
};

exports.openGraphChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.OPENGRAPGHCHECKER}${targetUrl}`;
  leftPart(req, res, url);
};

exports.metaTagsAnalyzer = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.METATAGSANALYSER}${targetUrl}`;
  leftPart(req, res, url);
};

exports.keywordRankChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const keyword = req.body.keyword;
  const url = `${process.env.KEYWORDRANKCHECKER}${targetUrl}&keyword=${keyword}`;
  leftPart(req, res, url);
};

exports.keywordDensityChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.KEYWORDDENSITYCHECKER}${targetUrl}`;
  leftPart(req, res, url);
};

exports.domainLookup = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.DOMAINLOOKUP}${targetUrl}`;
  leftPart(req, res, url);
};

exports.domainToIP = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.DOMAINTOIP}${targetUrl}`;
  leftPart(req, res, url);
};

exports.domainAgeChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.DOMAINAGECHECKER}${targetUrl}`;
  leftPart(req, res, url);
};

exports.hostingChecker = async (req, res) => {
  const targetUrl = req.params.url;
  const url = `${process.env.HOSTINGCHECKER}${targetUrl}`;
  leftPart(req, res, url);
};

