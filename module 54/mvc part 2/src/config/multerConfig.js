import multer  from "multer";
import multers3 from "multer-s3"
import {s3} from "./awsConfig.js"
import {AWS_BUCKET_NAME} from "./serverConfig.js";

export const s3Uploader = multer({
    stor
});