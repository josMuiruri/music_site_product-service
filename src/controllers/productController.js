const Product = require('../models/productModel');

// exports.getAllProducts = (req, res => {
//     res.status(200).json({
//         status: 'success',
//         // response: products.length,
//         // data: {
//         //     products
//         // }
//     });
// });

// exports.getProduct = (req, res => {
    
//     // const id = req.params.id * 1
//     // const product = products.find(el  => el.id === id);

//     // res.status(200).json({
//     //     status: 'success',
//     //     data: {
//     //         product
//     //     }
//     // });
// });

exports.createProduct = async (req, res) => {
    try{

    const newProduct = await Product.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            product: newProduct
        }
    });
} catch (err){

}
};

// exports.updateProduct = (req, res => {

//     res.status(200).json({
//         status: 'success',
//         data: {
//             product: 'Updated product'        }
//     });
// });

// exports.deleteProduct = (req, res => {

//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// });