function getDetails() {
  console.log("get details");
}
module.exports = (req, res) => {
  getDetails();
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
