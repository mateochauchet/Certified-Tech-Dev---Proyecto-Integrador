pipeline {
  agent any
  options {
    gitLabConnection('your-gitlab-connection-name')
    gitlabBuilds(builds: ['Build','Approve','Deploy'])
    buildDiscarder(
        logRotator(
            // number of build logs to keep
            numToKeepStr:'5',
            // history to keep in days
            daysToKeepStr: '15',
            // artifacts are kept for days
            artifactDaysToKeepStr: '15',
            // number of builds have their artifacts kept
            artifactNumToKeepStr: '1'
        )
    )
  }
  triggers {
    gitlab(
      triggerOnPush: true,
      triggerOnMergeRequest: false, 
      triggerOpenMergeRequestOnPush: "never",
      triggerOnNoteRequest: false,
      noteRegex: "Jenkins please retry a build",
      skipWorkInProgressMergeRequest: true,
      ciSkip: false,
      setBuildDescription: true,
      addNoteOnMergeRequest: true,
      addCiMessage: true,
      addVoteOnMergeRequest: true,
      acceptMergeRequestOnSuccess: false,
      branchFilterType: "NameBasedFilter",
      includeBranchesSpec: "",
      excludeBranchesSpec: "",
      pendingBuildName: "Jenkins",
      cancelPendingBuildsOnUpdate: false,
      secretToken: "5fbec3c6b4a1018ab960e542720958f8")
  }
  stages {
    stage('Build') {
      steps{
        gitlabCommitStatus("Build"){
          dir(path: 'digitalBooking') {
            withMaven(maven: 'maven3') {
              sh 'mvn clean install'
            }
          }
        }
      }
    }

    stage('Approve') {
      steps{
        gitlabCommitStatus("Approve"){
          input 'Deploy last build to development environment'
        }
      }
    }

    stage('Deploy') {
      steps{
        gitlabCommitStatus("Deploy"){
          script {
            ansiblePlaybook credentialsId: 'digitalBookingDeployment', disableHostKeyChecking: true, extras: '--become', installation: 'ansible', inventory: 'inventory_aws_ec2.yml', playbook: 'digitalBookingPlaybook.yml'
          }
        }
      }
    }

  }
  post{
    cleanup{
      cleanWs()
    }
  }
  environment {
    JDBC_DATABASE_URL = 'jdbc:mysql://digitalbooking.clpoxqlbhqxm.us-east-1.rds.amazonaws.com:3306/digitalbooking'
    JDBC_DATABASE_USERNAME = 'admin'
    JDBC_DATABASE_PASSWORD = 'lNtoEfMCCnLDtMg2xkR0'
    HTTP_SERVER_PORT = '80'
  }
}
