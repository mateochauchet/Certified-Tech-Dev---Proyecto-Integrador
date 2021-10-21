package com.booking.util;
import com.booking.exceptions.NotValidImage;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.UUID;

public class StringBase64 {

    public StringBase64() {
    }

    public static String saveImagen(String stringBase64) throws NotValidImage,IOException  {
        StringBuffer fileName = new StringBuffer();
        fileName.append(UUID.randomUUID().toString().replaceAll("-", ""));
        if (StringUtils.isBlank(stringBase64))
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
        File file = new File("./src/main/resources/resources/static/images/", fileName2);
        byte[] fileBytes = Base64.getDecoder().decode(stringBase64);
        FileUtils.writeByteArrayToFile(file, fileBytes);
        return "./src/main/resources/resources/static/images/" + fileName2;
    }
}