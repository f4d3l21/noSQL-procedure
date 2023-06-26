const fs = require('fs');
const csv = require('csv-parser');
const Loki = require('lokijs');

const db = new Loki('ecoles.db');

const ecoles = db.addCollection('ecoles');

const insertEcole = (ecole) => {
  const insertedEcole = ecoles.insert(ecole);
  db.saveDatabase();
  return insertedEcole;
};

const getEcoleByName = (name) => {
  return ecoles.findOne({ name: name });
};

const updateEcole = (name, updatedEcole) => {
    const ecole = ecoles.findOne({ name: name });
    if (ecole) {
      ecole.title = updatedEcole.title || ecole.title;
      ecole.name = updatedEcole.name || ecole.name;
      ecole.adress = updatedEcole.adress || ecole.adress;
      ecole.realAdress = updatedEcole.realAdress || ecole.realAdress;
      ecole.departement = updatedEcole.departement || ecole.departement;
      ecole.country = updatedEcole.country || ecole.country;
      ecole.tel = updatedEcole.tel || ecole.tel;
      ecole.email = updatedEcole.email || ecole.email;
      db.saveDatabase();
      return ecole;
    }
    return null;
  };  

  const deleteEcole = (name) => {
    const ecole = ecoles.findOne({ name: name });
    if (ecole) {
      ecoles.remove(ecole);
      db.saveDatabase();
      return true;
    }
    return false;
  };  

fs.createReadStream('../data/contacts.csv')
  .pipe(csv())
  .on('data', (row) => {
    ecoles.insert(row);
  })
  .on('end', () => {
    console.log('Chargement des écoles terminé.');

    const newEcole = {
      title: 'Nouvelle école',
      name: 'Nouvelle école',
      adress: '123 Rue de l\'école',
      realAdress: '123 Rue de l\'école',
      departement: '75000',
      country: 'France',
      tel: '01 23 45 67 89',
      email: 'contact@nouvelleecole.fr'
    };

    insertEcole(newEcole);


    const ecoleRechercher = getEcoleByName('Nouvelle école');
    console.log('École trouvée :', ecoleRechercher);

    const updatedEcole = {
        title: 'Nouvelle école mise à jour',
        tel: '01 98 76 54 32',
        email: 'contact@nouvelleecole-updated.fr'
      };
      const ecoleMiseAJour = updateEcole('Nouvelle école', updatedEcole);
      console.log('École mise à jour :', ecoleMiseAJour);  


      const ecoleSupprimee = deleteEcole('Nouvelle école');
    console.log('École supprimée :', ecoleSupprimee);

  
  
  });


module.exports = {
    insertEcole,
    ecoles,
    getEcoleByName,
    updateEcole,
    deleteEcole,
};