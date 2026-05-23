terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

variable "network_name" {
  description = "Docker network name"
  type        = string
}

resource "docker_container" "signlearn_backend" {
  name  = "signlearn-terraform-backend"
  image = "signlearn-pipeline-backend:latest"

  ports {
    internal = 8000
    external = 8001
  }

  networks_advanced {
    name = var.network_name
  }

  env = [
    "APP_NAME=SignLearn API",
    "APP_VERSION=1.0.0",
    "DEBUG=False"
  ]

  restart = "unless-stopped"

  healthcheck {
    test         = ["CMD", "curl", "-f", "http://localhost:8000/health"]
    interval     = "30s"
    timeout      = "10s"
    retries      = 3
    start_period = "10s"
  }

  labels {
    label = "app"
    value = "signlearn"
  }

  labels {
    label = "managed-by"
    value = "terraform"
  }
}

output "backend_container_id" {
  value = docker_container.signlearn_backend.id
}

output "backend_container_name" {
  value = docker_container.signlearn_backend.name
}