pipeline {
  agent any
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
