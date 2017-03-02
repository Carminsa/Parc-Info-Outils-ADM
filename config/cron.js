// module.exports.cron = {
//     cheque_expiration: {
//         schedule: '* * * * * *',
//         onTick: function (req, res) {
//
//             var x = new Date();
//             var y = new Date('2013-05-23');
//
//
//             // Cheque.find({ month : {'>=' : t }}).exec(function(err, cheque){console.log(cheque)})
//             Cheque.find({}).exec(function(err, cheque){
//                 for (var i = 0 ; i < cheque.length ; i++){
//
//                     var month = cheque[i].expiration.getMonth() + 1;
//                     var year = cheque[i].expiration.getFullYear();
//                     month = (month < 10 ? "0" : "") + month;
//
//                     var n = year + '-' + month + '-01';
//
//                     if (x < n){
//                         console.log('true');
//                     } else {
//                         console.log('false');
//                     }
//
//                    // console.log(n)
//                 }
//             })
//         }
//     }
// };