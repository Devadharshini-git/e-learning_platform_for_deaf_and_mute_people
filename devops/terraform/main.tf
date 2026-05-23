terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
  required_version = ">= 1.0"
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

# Network Module
module "network" {
  source = "./modules/network"
}

# Backend Module
module "backend" {
  source       = "./modules/backend"
  network_name = module.network.network_name
}

# Frontend Module
module "frontend" {
  source       = "./modules/frontend"
  network_name = module.network.network_name
  depends_on   = [module.backend]
}