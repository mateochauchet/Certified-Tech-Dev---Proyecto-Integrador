package com.booking.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


/* Documentacion de este codigo sacada de https://www.youtube.com/watch?v=vY7c7k8xmKE&t=20s  */
@Configuration
public class StorageConfig {

    @Value("${cloud.aws.credentials.access-key}")
    private String accesKey;

    @Value("${cloud.aws.credentials.secret-key}")
    private String accesSecret;

    @Value("${cloud.aws.region.static}")
    private String region;

    @Bean
    protected AmazonS3 generateS3client(){
        AWSCredentials credentials = new BasicAWSCredentials(accesKey, accesSecret);
        return AmazonS3ClientBuilder.standard().
                withCredentials(new AWSStaticCredentialsProvider(credentials)).
                withRegion(region).build();
    }

}
