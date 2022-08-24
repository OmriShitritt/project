//כאןיש לנו את כל הלוגיקה איך ניגשים לראוטר וכו

const Product = require('../models/productModel');
const {sendRes} = require('../helpers/sendRes');
const {makeFilterObject} = require('../helpers/makeFilterObject');
module.exports.createNewProduct = async (req, res) => {
    try{
        const { name, price, images,category, color, age, size } = req.body //למשוך משתנים
        const newProduct = await Product.create({ 
            name, 
            price, 
            images,
            category, 
            color, 
            age, 
            size 
        })//הפונק מחזירה פרומיס לכן ניתן AWAIT
        sendRes(res, newProduct, 201); //שלחנו את זה לפונקציה ב CONTROLLERS
    } catch {
        sendRes(res, err, 400, true);
    }

}

module.exports.getAllProducts = async (req, res) => {
    const filterObject = makeFilterObject(req.query);
    // console.log(req.query);
    // console.log(modifiedQuery);
    try {
        const products = await Product.find(filterObject);
        sendRes(res, products, 200)
    } catch (err) {
        sendRes(res, err, 400, true)
    }
};

