pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/fhoubart/demo-test-jasmine-cucumber.git'
            }
        }
        stage('Hello') {
            steps {
                echo "Hello !"
            }
        }
        stage("Test") {
            steps {
                bat "npm install"
                bat "npx cucumber-js -f json:logcucumber.json"
                bat "dir"
                bat "type logcucumber.json"
                cucumber buildStatus: 'null',
                    customCssFiles: '',
                    customJsFiles: '',
                    failedFeaturesNumber: -1,
                    failedScenariosNumber: -1,
                    failedStepsNumber: -1, fileIncludePattern: '**/*.json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
            }
        }
        stage("Zip") {
            steps {
                bat "tar czf pendu.tgz pendu.js index.js logcucumber.json"
            }
        }
        stage("archivage artefact") {
            steps {
                archiveArtifacts artifacts: '*.tgz', followSymlinks: false
            }
        }
    }
}
