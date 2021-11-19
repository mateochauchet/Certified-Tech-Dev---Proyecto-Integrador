pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        dir(path: 'digitalBooking') {
          sh 'mvn clean install -Dmaven.test.failure.ignore=false'
        }

      }
    }

  }
  tools {
    maven 'maven3'
  }
  environment {
    JDBC_DATABASE_URL = 'jdbc:mysql://digitalbooking.clpoxqlbhqxm.us-east-1.rds.amazonaws.com:3306/digitalbooking'
    JDBC_DATABASE_USERNAME = 'admin'
    JDBC_DATABASE_PASSWORD = 'lNtoEfMCCnLDtMg2xkR0'
    HTTP_SERVER_PORT = '80'
  }
}
