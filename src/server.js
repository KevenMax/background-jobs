import "dotenv/config";
import express from "express";
import routes from "./routes";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(routes);

app.use("/admin/queues", BullBoard.UI);

app.listen(3000, () => {
  console.log("Server running on localhost:3000");
});
