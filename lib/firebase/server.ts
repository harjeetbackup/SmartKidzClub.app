import config from 'config';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.firebase.projectId,
      clientEmail: config.firebase.clientEmail,
      privateKey: (config.firebase.privateKey
        ? JSON.parse(config.firebase.privateKey)
        : ''
      ).replace(/\\n/g, '\n'),
    }),
    databaseURL: config.firebase.databaseURL,
  });
}

export default admin;
