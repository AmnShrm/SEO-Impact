const express = require("express");
const router = express.Router();

const RapidApiController = require("../controllers/rapidApisController");

router.get("/redirectChecker/:url", RapidApiController.redirectChecker);
router.get(
  "/wordpressThemeDetector/:url",
  RapidApiController.wordpressThemeDetector
);
router.get("/pageSizeChecker/:url", RapidApiController.pageSizeChecker);
router.get("/getHttpHeaders/:url", RapidApiController.getHttpHeaders);

router.get("/openGraphChecker/:url", RapidApiController.openGraphChecker);
router.get("/metaTagsAnalyzer/:url", RapidApiController.metaTagsAnalyzer);
router.get("/keywordRankChecker/:url", RapidApiController.keywordRankChecker);
router.get(
  "/keywordDensityChecker/:url",
  RapidApiController.keywordDensityChecker
);

router.get("/domainLookup/:url", RapidApiController.domainLookup);
router.get("/domainToIP/:url", RapidApiController.domainToIP);
router.get("/domainAgeChecker/:url", RapidApiController.domainAgeChecker);
router.get("/hostingChecker/:url", RapidApiController.hostingChecker);

router.get("/seoReport/:url", RapidApiController.seoReport);

module.exports = router;
