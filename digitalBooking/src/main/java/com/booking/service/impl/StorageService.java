package com.booking.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.*;
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
        s3Client.putObject(new PutObjectRequest(bucketName, directorio + uuid + file.getName() + ".jpg", fileObj));
        String  fileURL = s3Client.getUrl(bucketName, directorio +uuid+ file.getName() + ".jpg").toExternalForm() ;
        fileObj.delete();
        return fileURL;
    }

    public String uploadFile2(File file,String directorio) throws IOException {
        String uuid = UUID.randomUUID().toString().replaceAll("-", "");
        s3Client.putObject(new PutObjectRequest(bucketName, directorio + uuid + file.getName() + ".jpg", file));
        String  fileURL = s3Client.getUrl(bucketName, directorio +uuid+ file.getName() + ".jpg").toExternalForm() ;
        file.delete();
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
