## USER MANAGEMENT APPLICATION

## API SERVER SET 
1. cd into the `api-server` directory and follow the steps below to run locally
2. create `.env` file and add the variables below in it at the root directory.
  - `MONGO_CONNECTION_URI`=
  - `JWT_SECRET`=
  - `FRONTEND_URL`=
  - `BACKEND_PORT`=
3. Run `npm install`
4. Run `npm run dev`
NB: If all is well the console will display no error


## CLIENT APP 
1. trace this path `client-app/src/app/environment/environment.dev.ts`
2. Replace  `apiUrl: "http://localhost:5001/api/v1"` replace this with the server url printed in the console when started [http://localhost:5001]
3. Run `npm install`
4. Run `ng serve`
NOTE: Ensure that the frontend url is the same as the one in the `api-server`

####  SET UP COMPLETED HAVE FUN.