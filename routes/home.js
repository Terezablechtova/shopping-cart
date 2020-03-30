

const home = (req, res) => {
    const products = [{
        id: 1,
        name: "Fender",
        description: "DR-100 Acoustic - Ebony",
        price: 2599.99,
        rating: 5,
        image: "https://www.long-mcquade.com/files/1127/md_P_DR100-EB.jpg"
    },
    {
        id: 2,
        name: "Yamaha",
        description: "DR-100 Acoustic - Red",
        price: 2799.99,
        rating: 5,
        image: "https://www.long-mcquade.com/files/1127/md_P_DR100-EB.jpg"
    },
    {
        id: 3,
        name: "Gibson",
        description: "DR-100 Acoustic - Black",
        price: 2699.99,
        rating: 5,
        image: "https://www.long-mcquade.com/files/1127/md_P_DR100-EB.jpg"
    }]
res.render('home', {products})

//res.send('Hello from entry point module!');
}
module.exports = home;

