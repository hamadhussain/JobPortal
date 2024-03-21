const errroMiddelware = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({
        message: "Wrong",
        success: false,
      });
    }

export default errroMiddelware;  