pipeline {
  agent any
  options {
    gitLabConnection('digitalbooking')
    gitlabBuilds(builds: ['Build','Optimized build','Approve','Deploy'])
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
      steps {
        gitlabCommitStatus("Approve"){
          dir(path: 'digital-booking-fe') {
            sh 'npm install'
          }
        }
      }
    }

    stage('Optimized build') {
      post {
        always {
          dir(path: 'digital-booking-fe') {
            archiveArtifacts 'build/**/*'
          }

        }

      }
      steps {
        gitlabCommitStatus("Approve"){
          dir(path: 'digital-booking-fe') {
            sh 'npm run build'
          }
        }
      }
    }

    stage('Approve') {
      steps {
        gitlabCommitStatus("Approve"){
          input 'Deploy build to S3 bucket'
        }
      }
    }

    stage('Deploy') {
      steps {
        sh '''git archive --format=tar origin/infraestructura:frontEnd-Deployment/ | tar xf -
'''
        gitlabCommitStatus("Approve"){
          script {
            ansiblePlaybook credentialsId: 'digitalBookingDeployment', disableHostKeyChecking: true, extras: '-b', installation: 'ansible', playbook: 'digitalBookingPlaybook.yml'
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
  tools {
    nodejs 'node17'
  }
  environment {
    CI = 'false'
  }
}
