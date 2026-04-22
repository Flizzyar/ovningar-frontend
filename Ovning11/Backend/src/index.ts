import express, { Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3001;

type Profile = {
  id: number;
  name: string;
  age: number;
  imageUrl: string;
};

type UpdateProfileBody = {
  name?: string;
  age?: number;
};

let profiles: Profile[] = [];
let currentId = 1;

// Skapa uploads-mapp om den inte finns
const uploadsDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Middleware
app.use(cors());
app.use(express.json());

// Gör uppladdade bilder åtkomliga via URL
app.use("/uploads", express.static(uploadsDir));

// Multer-konfiguration
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// GET - hämta alla profiler
app.get("/api/profiles", (_req: Request, res: Response) => {
  res.json(profiles);
});

// POST - skapa ny profil med bild
app.post("/api/profiles", upload.single("image"), (req: Request, res: Response) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "name och age krävs"
    });
  }

  if (!req.file) {
    return res.status(400).json({
      message: "Bild krävs"
    });
  }

  const parsedAge = Number(age);

  if (Number.isNaN(parsedAge) || parsedAge <= 0) {
    return res.status(400).json({
      message: "age måste vara ett giltigt positivt nummer"
    });
  }

  const newProfile: Profile = {
    id: currentId++,
    name,
    age: parsedAge,
    imageUrl: `http://localhost:${PORT}/uploads/${req.file.filename}`
  };

  profiles.push(newProfile);

  res.status(201).json(newProfile);
});

// PUT - uppdatera name och age
app.put(
  "/api/profiles/:id",
  (req: Request<{ id: string }, {}, UpdateProfileBody>, res: Response) => {
    const id = Number(req.params.id);
    const { name, age } = req.body;

    const profile = profiles.find((p) => p.id === id);

    if (!profile) {
      return res.status(404).json({
        message: "Profil hittades inte"
      });
    }

    if (name !== undefined) {
      if (name.trim() === "") {
        return res.status(400).json({
          message: "name får inte vara tomt"
        });
      }
      profile.name = name;
    }

    if (age !== undefined) {
      if (Number.isNaN(Number(age)) || Number(age) <= 0) {
        return res.status(400).json({
          message: "age måste vara ett giltigt positivt nummer"
        });
      }
      profile.age = Number(age);
    }

    res.json(profile);
  }
);

// DELETE - ta bort profil och bildfil
app.delete("/api/profiles/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);
  const profileIndex = profiles.findIndex((p) => p.id === id);

  if (profileIndex === -1) {
    return res.status(404).json({
      message: "Profil hittades inte"
    });
  }

  const profile = profiles[profileIndex];

  // Försök ta bort bildfilen från uploads
  const filename = path.basename(profile.imageUrl);
  const filePath = path.join(uploadsDir, filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  profiles.splice(profileIndex, 1);

  res.json({
    message: "Profil borttagen"
  });
});

app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});