import 'firebase/database';
import { initializeApp } from 'firebase';
import firebaseAPIKey from '../firebaseKey';


const app = initializeApp(firebaseAPIKey);

export const adminRef = app.database().ref('administrator');
export const projectsRef = app.database().ref('projects');
export const contactsRef = app.database().ref('contacts');