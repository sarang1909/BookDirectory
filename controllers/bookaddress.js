const data = require('./data');

let booksDirectory = data;

const getAddress = (req, res, next) => {
    res.send(booksDirectory);
};

const getAddressById = async (req, res, next) => {
    const id  = req.params.id;

    const result = await booksDirectory.find(i => i.id === id);
    if (!result) {
        return res.status(404).send('Book does not exist');
    }

    res.status(200).json({ book: result });
};

const createAddress = (req, res, next) => {
  const { id, name, lastname, phone, email, address } = req.body;

  const existBook = booksDirectory.find(i => i.id === id);
    if (existBook) {
        return res.status(404).send('Book already exist');
    }
    
    const createdAddress = {
        id,
        name,
        lastname,
        phone,
        email,
        address
    }

    booksDirectory.push(createdAddress);
    res.status(201).json({ book: createdAddress });
};

const updateAddress = (req, res, next) => {
    const id  = req.params.id;
    const { name, lastname, phone, email, address } = req.body;

    const updatedAddress = { ...booksDirectory.find(i => i.id === id) };
    const addressIndex = booksDirectory.findIndex(i => i.id === id);

    updatedAddress.name = name;
    updatedAddress.lastname = lastname;
    updatedAddress.phone = phone;
    updatedAddress.email = email;
    updatedAddress.address = address;

    booksDirectory[addressIndex] = updatedAddress;
    res.status(200).json({ book: updatedAddress });
};

const deleteAddress = (req, res, next) => {
    const id  = req.params.id;

    booksDirectory = booksDirectory.filter(i => i.id !== id);
    res.status(200).json({ book: booksDirectory });
};

exports.getAddress = getAddress;
exports.getAddressById = getAddressById;
exports.createAddress = createAddress;
exports.updateAddress = updateAddress;
exports.deleteAddress = deleteAddress;
