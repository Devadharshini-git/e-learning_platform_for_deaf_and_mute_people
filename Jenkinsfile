pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'signlearn-frontend'
        BACKEND_IMAGE  = 'signlearn-backend'
        COMPOSE_FILE   = 'docker-compose.yml'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }

        stage('Verify Tools') {
            steps {
                echo '🔧 Verifying tools...'
                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Build Frontend') {
            steps {
                echo '⚛️ Building React frontend...'
                sh 'docker compose build frontend'
            }
        }

        stage('Build Backend') {
            steps {
                echo '🐍 Building FastAPI backend...'
                sh 'docker compose build backend'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running tests...'
                sh '''
                    docker run --rm \
                        signlearn-app-backend \
                        python -c "from app.main import app; print('Backend OK')"
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying application...'
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }

        stage('Health Check') {
            steps {
                echo '❤️ Running health check...'
                sh '''
                    sleep 10
                    curl -f http://localhost:8000/health || exit 1
                    echo "Backend healthy!"
                    curl -f http://localhost:3000 || exit 1
                    echo "Frontend healthy!"
                '''
            }
        }

    }

    post {
        success {
            echo '✅ Pipeline completed successfully! SignLearn is live!'
        }
        failure {
            echo '❌ Pipeline failed! Check the logs above.'
        }
        always {
            echo '🧹 Pipeline finished.'
        }
    }
}