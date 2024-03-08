const getMetaData = require("metadata-scraper");

exports.metadataController = async (req, res) => {
  try {
    const { url } = req.body; 
    const data = await getMetaData(url);
   return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
