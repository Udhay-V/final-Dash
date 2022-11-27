var MongoClient = require("mongodb").MongoClient;
const DataModel = require('../Models/data');
let url = 'mongodb://localhost:27017/MYDB';

module.exports = {
    
    //login
    login: (req, res) => {
        console.log(req)
        let username = req.body.emailid
        let password = req.body.password
        console.log(username, password)
        MongoClient.connect(url, function (err, client) {
            var db = client.db('MYDB');
            if (err) throw err;
            //document to be find
            var query = { emailid: username };
            // find document to 'customers' collection using findOne
            db.collection("datas").findOne(query, function (err, result) {
                if (err) {
                    res.json({
                        message: "error occure", success: false
                    });
                }

                if (result == null) {
                    res.json({
                        message: "user not found ", success: false
                    });
                }
                else if (result.emailid == username && result.password == password) {
                    res.json({
                        message: "login success", success: true,
                        profile: {
                            id: result._id,
                            name: result.name,
                            mobileno: result.mobileno,
                            emailid: result.emailid,

                            //bloodgroup//age
                        }
                    });
                }
                else {
                    res.json({
                        message: "login failled", success: false
                    });
                }

                client.close();
            });
        })
    },
    

    //create
    create: (req, res) => {
        console.log(req.body);

        let data = new DataModel({
            name: req.body.name,
            mobileno: req.body.mobileno,
            emailid: req.body.emailid,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        })
        data.save()
            .then(result => {
                console.log("profile create sucessfully", result)
                res.json({ success: true, message: result })
            })
            .catch(err => {
                console.log("failed", result)
                res.json({ success: false, message: err })
            })
    },

    //get
    get: (req, res) => {

        DataModel.find()

            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.json({ success: false, message: "No data found" })
            })
    },

    //update
    update: (req, res) => {
        console.log(req.body);
        DataModel.findByIdAndUpdate({ _id: req.body.id }, req.body)
            .then(data => {
                res.json({ data: data, message: "profile updated sucessfully", success: true })
            })
            .catch(err => {
                res.json({ success: false, message: err })
            })
    },

    //delete
    delete: (req, res) => {
        DataModel.findByIdAndRemove({ _id: req.body.id })
            .then(data => {
                if (!data) {
                    return res.status(404).send({
                        message: "data not found with id " + req.params._id
                    });
                }
                res.json({ message: "data deleted successfully!", success: true });
            })
            .catch(err => res.json({ success: false, message: err }))
    }

}




