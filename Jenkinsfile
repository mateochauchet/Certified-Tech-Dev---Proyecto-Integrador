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
                  includeBranchesSpec: "release/qat",
                  excludeBranchesSpec: "",
              ]
            ])
          ])
      }


      }
    }

  }

}
