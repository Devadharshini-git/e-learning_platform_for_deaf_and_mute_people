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

resource "docker_container" "signlearn_frontend" {
  name  = "signlearn-terraform-frontend"
  image = "signlearn-pipeline-frontend:latest"

  ports {
    internal = 80
    external = 3001
  }

  networks_advanced {
    name = var.network_name
  }

  restart = "unless-stopped"

  labels {
    label = "app"
    value = "signlearn"
  }

  labels {
    label = "managed-by"
    value = "terraform"
  }
}

output "frontend_container_id" {
  value = docker_container.signlearn_frontend.id
}

output "frontend_container_name" {
  value = docker_container.signlearn_frontend.name
}