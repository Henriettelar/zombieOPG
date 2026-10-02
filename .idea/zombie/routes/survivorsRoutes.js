
const express = require("express");
const router = express.Router();
const survivors = require("../data/survivors");

// De Randomme våben
function getRandomeWeapon() {
    const weapons = ["Kichen Knife", "Baseball Bat", "Pan"];
    return Math.random() < 0.5 ? weapons[Math.floor(Math.random() * weapons.length)] : null;
}

router.post("/new", (req, res) => {
    const { name, location } = req.body;
    const weapon = getRandomWeapon ();
    const newSurvivor = {
        id: survivors.length + 1,
        name,
        location,
        weapon,
        health: 100,
        food: 50,
        score: 0,
        isAlive: true
    };

    survivors. push(newSurvivor);

    const response = {
        name: newSurvivor.name, // Tilføj navnet
        location: newSurvivor.location, // Tilføj lokationen
    };

    if (weapon) { // Hvis der er et våben, ti// routes/survivorsRoutes.js

        const express = require("express");
        const router = express.Router();
        const survivors = require("../data/survivors");

// Random weapon
        function getRandomWeapon() {
            const weapons = ["pan", "knife", "bat", "pistol"];
            return Math.random() < 0.5
                ? weapons[Math.floor(Math.random() * weapons.length)]
                : null;
        }

// POST /survivors/new
        router.post("/new", (req, res) => {
            const { name, location } = req.body;

            const weapon = getRandomWeapon();

            const newSurvivor = {
                id: survivors.length + 1,
                name,
                location,
                weapon,
                health: 100,
                food: 50,
                score: 0,
                isAlive: true
            };

            survivors.push(newSurvivor);

            // Return ONLY allowed fields
            const response = {
                name: newSurvivor.name,
                location: newSurvivor.location
            };

            if (weapon) {
                response.weapon = weapon;
            }

            res.json(response);
        });

        module.exports = router; // Tilføj det
        response.weapon = weapon
    }

    res.json(response);

    module.exports = router;

    const express = require("express");
    const app = express();

    app.use(express.json());

    const survivorRoutes = require("./routes/survivorsRoutes");
    app.use("/survivors", survivorRoutes);

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}