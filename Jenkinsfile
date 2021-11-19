pipeline {
  agent any

  properties([
    gitLabConnection('your-gitlab-connection-name'),
    pipelineTriggers([
        [
            $class: 'digitalbooking',
            branchFilterType: 'All',
            triggerOnPush: true,
            triggerOnMergeRequest: false,
            triggerOpenMergeRequestOnPush: "never",
            triggerOnNoteRequest: true,
            noteRegex: "Jenkins please retry a build",
            skipWorkInProgressMergeRequest: true,
            secretToken: project_token,
            ciSkip: false,
            setBuildDescription: true,
            addNoteOnMergeRequest: true,
            addCiMessage: true,
            addVoteOnMergeRequest: true,
            acceptMergeRequestOnSuccess: false,
            branchFilterType: "NameBasedFilter",
            includeBranchesSpec: "back-end",
            excludeBranchesSpec: "",
        ]
    ])
  ])

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
