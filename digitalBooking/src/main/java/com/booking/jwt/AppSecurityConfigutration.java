package com.booking.jwt;

import com.booking.service.impl.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class AppSecurityConfigutration extends WebSecurityConfigurerAdapter{

        @Autowired
        private UserSecurityService userSecurityService;

        @Autowired
        private JwtRequestFilter jwtRequestFilter;


        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(userSecurityService);
        }


        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .csrf().disable()
                    .authorizeRequests()
                    .antMatchers("/api/categorias/{id}","/api/categorias/" ).permitAll()
                    .antMatchers("/api/ciudad/").permitAll()
                    .antMatchers("/api/productos/{id}","/api/productos/","/api/productos/categoria/{titulo}" , "/api/productos/ciudad/{nombre}", "/api/productos/reserva/{fecha_inicio}/{fecha_fin}" ).permitAll()
                    .antMatchers("/api/productos/ciudad/{nombre}" ).permitAll()
                    .antMatchers("/api/reserva/").permitAll()
                    .antMatchers("/api/usuarios/authenticate","/api/usuarios/","/api/usuarios/{id}").permitAll()
                    .anyRequest()
                    .authenticated()
                    .and()
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

            http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        }

        @Override
        @Bean
        public AuthenticationManager authenticationManagerBean() throws Exception {
            return super.authenticationManagerBean();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return NoOpPasswordEncoder.getInstance();
        }

    }



