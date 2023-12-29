import express from "express";

const app = express();

app.get('/api/products', (req, res) => {
    const products = [ 
        {
            id: 1,
            name: 'table-wooden',
            price: 200,
        }, {
            id: 2,
            name: 'normal-wooden',
            price: 222,
        },
        {
            id: 3,
            name: 'saagwan-wooden',
            price: 345,
        },{
            id: 4,
            name: 'teapoy-wooden',
            price: 257,
        },{
            id: 5,
            name: 'chair-wooden',
            price: 505,
        },{
            id: 6,
            name: 'bed-wooden',
            price: 6060,
        }
    ]
    console.log('req.query:', req.query);
    
    if (req.query && req.query.search) {
        const filterProducts = products.filter(product => 
            product.name.includes(req.query.search)
        );
        res.send(filterProducts);
        return;
    }
    
    setTimeout(() => {
        res.send(products);
    },3000);
})

const port = process.env.PORT || 3000;

app.listen(port , () =>{
    console.log(`Server is running on ${port}`);
})
