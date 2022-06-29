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
                bat "npm testlog"
            }
        }
        stage("Zip") {
            steps {
                bat "tar czf pendu.tgz pendu.js index.js"
            }
        }
        stage("archivage artefact") {
            steps {
                archiveArtifacts artifacts: '*.tgz', followSymlinks: false
            }
        }
    }
}
