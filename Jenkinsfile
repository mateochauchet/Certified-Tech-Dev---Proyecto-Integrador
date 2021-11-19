pipeline {
  agent any
  tools { 
        maven 'maven3' 
    }
  stages {
    stage('Build') {
      steps {
        dir(path: 'digitalBooking') {
          sh 'mvn clean package'
        }

      }
    }

  }
}
