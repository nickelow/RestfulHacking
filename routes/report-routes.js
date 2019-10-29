module.exports = (app, db) => {
  app.get("/reports", async (req, res) => {
    const reports = await db.report.findAll();
    res.json(reports);
  });

  app.get("/reports/:id", async (req, res) => {
    const report = await db.report.findByPk(req.params.id);
    res.json(report);
  });

  app.post("/reports", async (req, res) => {
    if (!req.body.user) {
      res.json("Please provide a valid username!");
    }
    const user = await db.user.findOne({
      where: {
        userName: req.body.user
      }
    });
    if (!user) {
      res.json("Please provide a valid username!");
    }
    const report = await db.report.create(req.body);
    res.json(report);
  });

  app.put("reports/:id", async (req, res) => {
    const report = await db.report.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(report);
  });

  app.delete("/reports/:id", async (req, res) => {
    const report = await db.report.destroy({
      where: {
        id: req.params.id
      }
    });
  });
};
