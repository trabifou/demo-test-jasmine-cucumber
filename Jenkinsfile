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
                bat "npm test"
                bat "dir"
                bat "type logcucumber.json"
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
