router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const results = await Gift.find(filter);
  res.json(results);
});
