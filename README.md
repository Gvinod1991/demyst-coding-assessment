# Demyst Coding Assessment

## Requirements

- The goal of the project is to build a simple one page application to display the Balance Sheet Report from Xero.

- Please read through the API documentation at https://developer.xero.com/documentation/api/accounting/reports#balance-sheet.

- Use mock Xero Balance Sheet API docker image available at https://hub.docker.com/r/jaypeng2015/show-me-the-money.

- The Server runs on http with port 3000, and the api path is /api.xro/2.0/Reports/BalanceSheet once you have it running.

- The system should consist of the following:

- Backend - Any typed Language (except Java)

  - Assume that the authentication with Xero is already done.
  - Provide API endpoint to get data from Xero API for the frontend to use.
  - Consider error handling.
  - Consider unit tests.
  
- Frontend - Typescript + React

  - Display the results in a table based on the data structure return from Xero.
  - Consider unit tests.

Consider containerise your solution.


## Steps to run the application

- Clone the repository.
  - There are two folders - backend and frontend. backend is for the backend application and frontend is for the frontend application.

### Backend
- Move to backend folder
- Pull the image jaypeng2015/show-me-the-money from Docker 
- Run `docker run -d -p 3000:3000 jaypeng2015/show-me-the-money`
- Copy .env.example to .env
- Run `pnpm install`
- Run `pnpm start`

### Frontend
- Move to frontend folder
- Copy .env.example to .env
- Run `pnpm install`
- Run `pnpm run dev`