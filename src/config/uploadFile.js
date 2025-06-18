const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/image/image_product'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})


const fileFilter = (req, file , cb) => {
    const allowed = ['image/png', 'image/jpg', 'image/jpeg'];

    if (allowed.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(new Error('Invalid file type. Only PNG, JPG, and JPEG are allowed.'), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    },
    fileFilter: fileFilter
})


module.exports = upload;