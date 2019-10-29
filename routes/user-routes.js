module.exports = (app, db) => {
  app.post("/users", async (req, res) => {
    const { username } = req.body;
    if (username != null) {
      const user = await db.user.create({
        userName: username
      });
      res.json(`welcome, ${user.userName}!`);
    } else {
      res.json("Please include a username!");
    }
  });

  app.get("/users", async (req, res) => {
    const users = await db.user.findAll();
    res.json(users);
  });

  app.get("/users/:name", async (req, res) => {
    const user = await db.user.findOne({
      where: {
        userName: req.params.name
      }
    });
    if (user === null) {
      res.json("Could not find this user");
    }
    res.json(user.userName);
  });

  app.put("/users/:name", async (req, res) => {
    const user = await db.user.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (user === null) {
      res.json("Could not find this user");
    }
    res.json(`Updated ${user.userName}!`);
  });

  app.delete("users/:name", async (req, res) => {
    const user = await db.user.delete({
      where: {
        userName: req.params.name
      }
    });
    if (user === null) {
      res.json("Could not find this user");
    }
    res.json(`Deleted ${user.userName}!`);
  });
};
