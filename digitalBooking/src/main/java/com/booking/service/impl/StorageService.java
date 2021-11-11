package com.booking.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.booking.exceptions.NotValidImage;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.*;
import java.util.Base64;
import java.util.UUID;

@Service
public class StorageService {

    @Value("${application.bucket.name}")
    private String bucketName;

    @Autowired
    private AmazonS3 s3Client;

    public String uploadFile(MultipartFile file,String directorio) throws IOException {
        String uuid = UUID.randomUUID().toString().replaceAll("-", "");
        File fileObj = convertMultipartFileToFile(file);
        s3Client.putObject(new PutObjectRequest(bucketName, directorio +uuid+file.getName(), fileObj));
        String  fileURL = s3Client.getUrl(bucketName, directorio +uuid+ file.getName()).toExternalForm();
        fileObj.delete();
        return fileURL;
    }

    public File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convertedFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream((convertedFile));
        fos.write(file.getBytes());
        return convertedFile;
    }


    public void deleteFile(String filename){
        s3Client.deleteObject(bucketName,filename);
    }

    public  File imageToFile(String stringBase64) throws NotValidImage, IOException {
        StringBuffer fileName = new StringBuffer();
        fileName.append(UUID.randomUUID().toString().replaceAll("-", ""));
        if (StringUtils.isBlank(stringBase64) || stringBase64 == null)
            throw new NotValidImage("el archivo no puede estar vacio");
        else if (stringBase64.indexOf("data:image/png;") != -1) {
            stringBase64 = stringBase64.replace("data:image/png;base64,", "");
            fileName.append(".png");
        } else if (stringBase64.indexOf("data:image/jpeg;") != -1) {
            stringBase64 = stringBase64.replace("data:image/jpeg;base64,", "");
            fileName.append(".jpeg");
        } else
            throw new NotValidImage("Seleccione una imagen con formato .png o .jpg");;

        String fileName2 = fileName.toString();
        File file = new File(fileName2);
        byte[] fileBytes = Base64.getDecoder().decode(stringBase64);
        FileUtils.writeByteArrayToFile(file, fileBytes);
        return file;
    }



}
