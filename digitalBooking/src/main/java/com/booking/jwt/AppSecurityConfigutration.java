package com.booking.jwt;

import com.booking.service.impl.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
                    .antMatchers(HttpMethod.POST,"/api/usuarios/authenticate").permitAll()
                    .antMatchers(HttpMethod.GET,"/api/reserva/{id}").permitAll()
                    .antMatchers("/api/categorias/{id}","/api/categorias/" ).permitAll()
                    .antMatchers("/api/ciudad/").permitAll()
                    .antMatchers("/api/caracteristicas/").permitAll()
                    .antMatchers(HttpMethod.GET, "/api/productos/reserva/{fecha_inicio}/{fecha_fin}").permitAll()
                    .antMatchers("/api/productos/{id}","/api/productos/","/api/productos/categoria/{titulo}" , "/api/productos/ciudad/{nombre}" ).permitAll()
                    .antMatchers("/api/productos/ciudad/{nombre}" ).permitAll()
                    .antMatchers(HttpMethod.GET,"/api/usuarios/{id}").permitAll()
                    .antMatchers(HttpMethod.POST,"/api/usuarios/").permitAll()
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
            return new BCryptPasswordEncoder(12);
        }

    }



