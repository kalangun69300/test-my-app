pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://localhost:9000/'  // SonarQube server URL
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // ดึง Docker image จาก Docker Hub
                    sh "docker pull kalangun/test-my-app:latest"
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'adc8eea2-9ab6-4d68-b4bd-dfc080531a52', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    // Login to Docker Hub
                    sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                }
            }
        }

        stage('Scan Docker Image with SonarQube') {
            steps {
                script {
                    // สแกน Docker image ด้วย SonarQube
                    sh """
                    docker run --rm -v $PWD:/mnt/sonar sonarsource/sonar-scanner-cli \
                    -Dsonar.projectKey=test-my-app \
                    -Dsonar.sources=/mnt \
                    -Dsonar.host.url=$SONARQUBE_URL
                    """
                }
            }
        }

        stage('Scan Docker Image with Trivy') {
            steps {
                script {
                    // สแกน Docker image ด้วย Trivy
                    sh "trivy image --no-progress --exit-code 1 --severity HIGH,CRITICAL kalangun/test-my-app:latest"
                }
            }
        }
    }
}
