import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 5000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.use('/', usersRoutes);

// app.get('/', (req, res) => {
//     res.render('home');
// });

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));