db = db.getSiblingDB('alas_chiquitanas');
db.createUser({
  user: 'sipi',
  pwd: 'sipi123',
  roles: [
    { role: 'readWrite', db: 'alas_chiquitanas' },
  ],
});