export const testControllers = (req,res) => {
    const {name}=req.body
    res.status(200).send(`Name ${name}`)



}