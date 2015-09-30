//cuantos registros arrojo el comando count? 
db.grades.count();
//800

//Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({student_id : 4}, {_id:0, student_id:1, score:1})
/*
{ "student_id" : 4, "score" : 87.89071881934647 }
{ "student_id" : 4, "score" : 27.29006335059361 }
{ "student_id" : 4, "score" : 5.244452510818443 }
{ "student_id" : 4, "score" : 28.656451042441 }
*/

//¿Cuantos registros hay de tipo exam?
db.grades.find({type : 'exam'}).count();
//200

//¿Cuantos registros hay de tipo homework?
db.grades.find({type : 'homework'}).count();
//400

//¿Cuantos registros hay de tipo quiz?
db.grades.find({type : 'quiz'}).count();
//200

//Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.remove({ student_id: 3 });
//WriteResult({ "nRemoved" : 4 })

//¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({score : 75.29561445722392, type : 'homework'}, {_id : 0, student_id : 1, score : 1, type : 1});
//{ "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }

//Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
db.grades.update({ _id : ObjectId("50906d7fa3c412bb040eb591") }, {$set: { score : 100 }});
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

//A que estudiante pertenece esta calificación.
db.grades.find({score : 100}, {_id : 0, student_id : 1, score : 1});
//{ "student_id" : 6, "score" : 100 } 
