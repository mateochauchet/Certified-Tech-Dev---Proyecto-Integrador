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




}