pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        dir(path: 'digitalBooking') {
          withMaven(maven: 'maven3') {
            sh 'mvn clean install'
          }

        }

      }
    }

  }
  environment {
    JDBC_DATABASE_URL = 'jdbc:mysql://digitalbooking.clpoxqlbhqxm.us-east-1.rds.amazonaws.com:3306/digitalbooking'
    JDBC_DATABASE_USERNAME = 'admin'
    JDBC_DATABASE_PASSWORD = 'lNtoEfMCCnLDtMg2xkR0'
    HTTP_SERVER_PORT = '80'
  }
}