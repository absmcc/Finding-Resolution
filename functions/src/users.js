import  dbConnect  from "./dbConnect.js"

export const getAllUsers = (req, res) => {
  if (!req.body.fName) {
    res.status(401).send("Invalid Request")
    return
  }

  const db = dbConnect()
  db.collection("users")
    .add(req.body)
    .then((docid) => res.status(201).send({ id: doc.id }))
    .catch((err) => {
      res.status(500).send(err)
    })
}
