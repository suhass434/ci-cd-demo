pipeline {
    agent any
    environment {
        IMAGE_NAME = 'suhass4343/node-ci-cd-demo'
    }
    stages { 
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/suhass434/ci-cd-demo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'echo $DOCKER_HUB_PASS | docker login -u $DOCKER_HUB_USER --password-stdin'
                sh 'docker run -d -p 3000:3000 --name node-ci-cd $IMAGE_NAME:$BUILD_NUMBER'
            }
        }
    }
}