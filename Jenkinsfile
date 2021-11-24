pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          properties([
            gitLabConnection('digitalbooking'),
            pipelineTriggers([
              [
                $class: 'GitLabPushTrigger',
                triggerOnPush: true,
                triggerOnMergeRequest: false,
                triggerOpenMergeRequestOnPush: "never",
                triggerOnNoteRequest: true,
                noteRegex: "Jenkins please retry a build",
                skipWorkInProgressMergeRequest: true,
                secretToken: '5fbec3c6b4a1018ab960e542720958f8',
                ciSkip: false,
                setBuildDescription: true,
                addNoteOnMergeRequest: true,
                addCiMessage: true,
                addVoteOnMergeRequest: true,
                acceptMergeRequestOnSuccess: false,
                branchFilterType: "NameBasedFilter",
                includeBranchesSpec: "",
                excludeBranchesSpec: "",
              ]
            ])
          ])
        }

        dir(path: 'digitalBooking') {
          withMaven(maven: 'maven3') {
            sh 'mvn clean install'
          }

        }

      }
    }

    stage('Approve') {
      steps {
        input 'Deploy last build to development environment'
      }
    }

    stage('Deploy') {
      steps {
        script {
          ansiblePlaybook credentialsId: 'digitalBookingDeployment', disableHostKeyChecking: true, extras: '--become -u ubuntu', installation: 'ansible', inventory: 'inventory_aws_ec2.yml', playbook: 'digitalBookingPlaybook.yml'
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