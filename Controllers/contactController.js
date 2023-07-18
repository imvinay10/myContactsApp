//@description
//@route GET /api/contacts
//@access public
const getContacts = async (req, res) => {
    res.status(200).json({ meesage: "Get all Contacts" })
};

//@description create new contact
//@route POST /api/contacts
//@access public
const createContact = async(req, res) => {
    console.log("request body is :", req.body)
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    res.status(201).json({ meesage: "Get all Contacts" })
};

//@description create new contact
//@route GET /api/contacts/:id
//@access public
const getContact = async(req, res) => {
    res.status(200).json({ message: `get contacts for ${req.params.id}` });
};

//@description update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async(req, res) => {
    res.status(200).json({ message: `update contacts for ${req.params.id}` });
};


//@description delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async(req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = { 
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact 
};
