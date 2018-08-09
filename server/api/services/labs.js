const LabsDb = require('../../data/labs.db.json');

class LabsService {
  byName(name) {
    for (let i=0; i < LabsDb.length; i++) {
      if (LabsDb[i].name.toLowerCase() === name.toLowerCase().trim()) {
        return LabsDb[i];
      }
    }
    return null;
  }

  all() {
    return LabsDb;
  }
}

export default new LabsService();
