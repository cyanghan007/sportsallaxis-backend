# Sports-ALl-Axis
All in one inclusive sports app that allows you to check scores anytime and anywhere.
## Project Description
This was my final project for Per Scholas. In this project, i applied the MERN stack to fully optimize a sports app that will pull data from epsn. The app usuage was to be able to sucessfully pull current sports scores 24/7 and always be up to date.
## **Routes**
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/vi/ | home page |
GET | /api/vi/seed | data page |
GET | /api/vi/NBA | Grabs all NBA scores |
GET | /api/vi/NFL | Grabs all NFL scores |
GET | /api/vi/MLB | Grabs all MLB scores |
POST | /api/vi/ | post scores into show page |
GET | /api/vi/:id/edit | page to edit |
PUT | /api/vi/:id | edit/update |
DELETE | /api/v1/:id | delete and make changes |

## Challenges
Throughout this project I faced serveral challenges, some which included getting my 3rd party apis to connect successfully and pull data. My backend database would not link and display my test data when my app was launched on my localhost. Routes on my frontend side would not call corerctly and display. These all issues than I inded to rectify in the near future.

## Future Goals
- Create better user experience interface
- Grab data sucessfully from 3rd party APIs
- Style app

### Softwares Used
- Node.js
- React
- Mongoosedb
- Express.js

