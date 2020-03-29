const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination : path.resolve(__dirname,'..','..','..','Uploads'),
        filename : (req, file , cd) => {
            let ext = path.extname(file.originalname);
            let nome = path.basename(file.originalname,ext) + "-"+Date.now() + ext;
            cd(null,nome)
        }
    })
}