// mongodb-init-replica-set.js
var replicaSetName = 'overleaf';
var memberName = 'mongo:27017'; // Asegúrate que coincide con el nombre del servicio mongo

var config = {
  _id: replicaSetName,
  members: [
    { _id: 0, host: memberName }
  ]
};

rs.initiate(config);

print(">>> MongoDB init script executed successfully! <<<");