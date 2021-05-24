import mongoose from 'mongoose';
import express, { json, static } from 'express';
import { urlencoded } from 'body-parser';
import cors from 'cors';
const app = express();


import db from './database/db';

import registrationRoute from './route/registration_route';
import eventRoute from './route/event_route';
import activityRoute from './route/activity_route';
import subscribeRoute from './route/subscribe_route';
import teamRoute from './route/team_route';


app.use(cors())
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(registrationRoute)
app.use(eventRoute)
app.use(activityRoute)
app.use(subscribeRoute)
app.use(teamRoute)
app.use(static('Allimages'))
app.listen(5000);