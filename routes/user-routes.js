module.exports = (app, db) => {
  app.post("/users", async (req, res) => {
    console.log("post");
    console.log(req.body);
    const { name } = req.body;
    const user = await db.user.create({
      userName: name
    });
    res.send(`welcome, ${user.userName}!`);
  });
  app.get("/users", async (req, res) => {
    const users = await db.user.findAll();
    res.send(users);
  });
  app.get("/users/:name", async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const user = await db.user.findOne({
      where: {
        userName: req.params.name
      }
    });
    console.log(user);
    res.send(user.userName);
  });
};
