/**
 * CsvController
 *
 * @description :: Server-side logic for managing Csvs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var json2csv = require('json2csv');
var fs = require('fs');
var myData = [];

module.exports = {

    csv: function (req, res) {

        Computer.find({}).populate('department').exec(function(err, computers){
            if (!err){

                var  fields = ['id ordinateurs', 'numero de serie', 'etat', 'systeme exploitation', 'type d usage', 'Garantie' , 'department', 'en SAV', 'cree le' , 'modifier le'];

                for (var i = 0 ; i < computers.length ; i++)
                {
                    myData.push({
                            "id ordinateurs": computers[i].id,
                            "numero de serie": computers[i].serial,
                            "etat": computers[i].serial,
                            'systeme exploitation': computers[i].os,
                            'type d usage': computers[i].usage,
                            'Garantie': computers[i].garantie,
                            'department': computers[i].department.department,
                            'en SAV': computers[i].SAV,
                            'cree le': computers[i].createdAt,
                            'modifier le': computers[i].updatedAt,
                        }
                    );
                }

                var csv = json2csv({data : myData, fields : fields});

                fs.writeFile('file.csv', csv, function(err) {
                    if (err) throw err;
                    console.log(csv);
                });
                console.log(csv);
                var filename = 'files' + '.csv';
                res.attachment(filename);
                res.end(csv, 'UTF-8');
            }

        });
    },
    // _config:{}
};

