import path from 'path';
import express from 'express';
import multer from 'multer';
const router =express.Router();



const storage=multer.diskStorage({
    destination(req,file,cb){
        cb(null,'uploads/');
    },
    filename(req,file,cb){
        cb(null,`${file.fieldname}-${Data.now()}$(path.extname(file.
            originalname)}`);

    }
});


function checkFileType (file ,cb){
    const filetypes= /jpg|jpeg|png/;
    const extname=filetypes.test(path.extname(file.originalname).
    toLowercase());
     
    const mimetype= filetypes.test(file.mimetype);
    if(extname && mistype){
        return cb(null,true);

    }else{
        cb('Image only!');
    }




}


const upload = multer({
    storage,

});

router.post('/' ,upload.single('image'),(req,res) =>{
    res.send({
       message:'Image Uploaded',
       image:`/${req.file.path}`,
       
    });
})

export default router;
