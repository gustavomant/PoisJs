import express from "express";
import poiRoutes from "./routes/poiRoutes";

const app = express();

app.use(express.json());
app.use("/pois", poiRoutes);

export default app;