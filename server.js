'use strict';

// const get_app_server = require('./app.js');

// const database = require('./database.js');
// const database_init = database.database_init;

// if(!process.env.SSL_CONTACT_EMAIL) {
//     console.error(`[ERROR] The environment variable 'SSL_CONTACT_EMAIL' is not set, please set it.`);
//     process.exit();
// }

// (async () => {
// 	// Ensure database is initialized.
// 	await database_init();

// 	const app = await get_app_server();

// 	require('greenlock-express').init({
// 	    packageRoot: __dirname,
// 	    configDir: './greenlock.d',
// 	    cluster: false,
// 	   	maintainerEmail: process.env.SSL_CONTACT_EMAIL,
// 	}).serve(app);
// })();

'use strict';

const get_app_server = require('./app.js');
const database = require('./database.js');
const database_init = database.database_init;

const http = require('http'); // Import HTTP module

(async () => {
    // Ensure database is initialized.
    await database_init();

    const app = await get_app_server();

    // Create a standard HTTP server
    const server = http.createServer(app);

    // Define the port you want the server to listen on
    const PORT = process.env.PORT || 80;

    // Start the server
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})();
