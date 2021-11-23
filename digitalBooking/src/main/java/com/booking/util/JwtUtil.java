package com.booking.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {
    private String SECRET_KEY = "secret";


    /*
     * sacar del token los claims lo cual contienen atributos como el userdetails y expiration del jwt
     * */
    private Claims extractAllClaims(String token){
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    public String extractClaimUsername(String token){
        Claims claims = extractAllClaims(token);
        return claims.getSubject();
    }
    public String extractUserName(String token){
        return extractClaimUsername(token);
    }

    /*
     * creacion del token
     * */
    private  String createToken(Map<String,Object> claims, String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1800000*60+60*10))
                .signWith(SignatureAlgorithm.HS256,SECRET_KEY).compact();
    }
    public String generateToken(UserDetails userDetails){
        Map<String,Object> claims = new HashMap<>();
        claims.put("AUTORITIES",userDetails.getAuthorities());
        return createToken(claims,userDetails.getUsername());

    }


    /*
     *comprobar expiracion de tiempo del token
     * */

    public Date extractClaimsDate(String token){
        Claims claims = extractAllClaims(token);
        return claims.getExpiration();
    }

    public Date extractExpiration(String token){
        return extractClaimsDate(token);
    }

    private Boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    /*
     * validar token
     * */

    public Boolean validateToken(String token, UserDetails userDetails){
        final String username= extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
