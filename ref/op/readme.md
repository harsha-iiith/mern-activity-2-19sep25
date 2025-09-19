# Mern Lab 1

## cloned the repo

```bash
git clone https://github.com/AadityaNarain2003/Mern_Lab_1_
```

## installed dependencies

```bash
# Rename folder to your rollnumber
cd your-rollnumber/backend
npm install
npm install nodemon mongoose
```

## run the server

```bash
npm run dev
```

## created .env file

```bash
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/labactivity1
NODE_ENV=dev
```

## called connectDB function in server.js

```javascript
// server.js
import connectDB from "./config/db.js";

await connectDB();
```

## created models/tasks.model.js

```javascript
// from documentation created code in this
// tasks.model.js
import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
  id: String,
  title: String,
  content: String,
});

export default mongoose.model("Task", NotesSchema);
```

## replaced the old code with the new one in controller

```javascript
// /mnt/leostore/leostore/leo-ext/college/ssd/activity/mern-activiy-1-17sep25/2025204021/backend/src/controller/notesController.js

// used try catch and imported the model and used for all the endpoints including the extra endpoint(to get the number of notes)
```

## in the test file

```bash
# Add beforeAll and afterAll to the test file and before each test call the resetNotes function
beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await resetNotes();
});
```

## run the tests

```bash
npm run test
```
