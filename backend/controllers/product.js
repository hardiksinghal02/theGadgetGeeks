const db = require('../database').db;

exports.getProductsByFeatures = (req, res, next) => {
  console.log('Products triggered');

  const category = req.query.category;
  const features = req.body;
  console.log(category);
  console.log(features);
  let productRef = db.collection(category);
  let data = [];
  let featuresSize = 0;
  for(var key in features){
    if (features.hasOwnProperty(key))
      featuresSize++;
  }
  console.log('Size '+ featuresSize);

  if(featuresSize!== 0){
    console.log(Object.keys(features)[0]+' '+features[Object.keys(features)[0]]);
    productRef = productRef.where(Object.keys(features)[0],'in', features[Object.keys(features)[0]]);
  }
  let products = productRef.get()
  .then(snapshot => {
    let products = [];
    snapshot.forEach(doc => {
     products.push({...doc.data(),id:doc.id});
     console.log(products);

     for(let i = 0; i < products.length ; i++){
       for(var key in features){
          console.log(key);
          console.log(features[key]);
          console.log((products[i])[key]);
          console.log(features[key].includes(products[i][key]));

          if(!features[key].includes(products[i][key])){
            products.splice(i,1);
            break;
          }
       }
     }
    });
    res.status(200).send(products);
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}

exports.addProduct = (req, res, next) => {
  let data = req.body;
  db.collection(data.category).add(data).then((ref) => {
    response = {id : ref.id}
    res.status(201).json(response);
  }).catch(err => {
    console.log(err);
  });
}

exports.getProductById = (req, res, next) => {
  const id = req.query.id;
  const category = req.query.category;
  console.log(id+' '+category);

  let productRef = db.collection(category).doc(id).collection('data').doc('features');
  productRef.get().then(doc => {
    res.status(200).send(doc.data());
  });

}

exports.addFeatures = (req, res, next) => {
  let category = req.query.category;
  let productId = req.query.id;
  let data = req.body;
  console.log(category);
  console.log(productId);

  db.collection(category).doc(productId).collection('data').doc('features').set(data).then((ref) => {
    const response = {id : ref.id};
    res.status(201).send(response);
  })
}

exports.addFilters = (req,res,next) => {
    let data = req.body;
    db.collection('filters').doc('Smartphone').set(data).then(ref => {
      res.status(201).send({id: ref.id});
    });
}




