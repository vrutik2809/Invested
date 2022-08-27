import express from "express";
import homeRouter from "./routes/index.routes.js";
import authRouter from "./routes/auth.routes.js";
import companyRouter from "./routes/company.routes.js";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import { connection, schemas } from "./models/index.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(homeRouter);

app.use(authRouter);

app.use(companyRouter);

io.on('connection', (socket) => {
	console.log('user connected');
	socket.on('chat', async (data) => {
		const Company = connection.model("companies", schemas.company);
		const company = await Company.findById(data.company_id);
		company.discussions.push({
			user_id: data.user_id,
			message: data.msg,
		});
		await company.save();
		io.emit('chat', data);
	})
	socket.on('disconnect', (socket) => {
		console.log('user disconnected');

	})
});

server.listen(process.env.PORT || 3000, () => {
	console.log("Server is running on port 3000");
});