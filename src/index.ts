import express from "express";


const app = express();

app.use(express.json());

app.get("/test", async (req, res) => {
    try {
        console.log("DB_USER:", process.env.DB_USER);
        console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
        console.log("DB_PASSWORD type:", typeof process.env.DB_PASSWORD);

        const result = await prisma.$queryRaw`SELECT 1`;
        res.json({ db: result });
        console.log(result)
    } catch (error: any) {
        console.error("FULL ERROR:", error);
        res.status(500).json({
            message: error.message,
            code: error.code,
            meta: error.meta,
        });
    }
});

// GET all users
app.get("/user", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET all animals
app.get("/animal", async (req, res) => {
  try {
    const animal = await prisma.animal.findMany();
    res.json(animal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch animals" });
  }
});

// GET all inventory items
app.get("/inventory_item", async (req, res) => {
  try {
    const inventoryItem = await prisma.inventory_item.findMany();
    res.json(inventoryItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch iventory items" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});