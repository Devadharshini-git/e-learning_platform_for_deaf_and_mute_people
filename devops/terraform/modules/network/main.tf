terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}
resource "docker_network" "signlearn_network" {
  name   = "signlearn-terraform-network"
  driver = "bridge"

  labels {
    label = "app"
    value = "signlearn"
  }

  labels {
    label = "managed-by"
    value = "terraform"
  }
}

output "network_name" {
  value = docker_network.signlearn_network.name
}

output "network_id" {
  value = docker_network.signlearn_network.id
}