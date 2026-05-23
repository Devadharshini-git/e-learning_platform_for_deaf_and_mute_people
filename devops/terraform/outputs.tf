output "frontend_url" {
  description = "Frontend URL"
  value       = "http://localhost:${var.frontend_port}"
}

output "backend_url" {
  description = "Backend URL"
  value       = "http://localhost:${var.backend_port}"
}

output "api_docs_url" {
  description = "API Documentation URL"
  value       = "http://localhost:${var.backend_port}/docs"
}

output "network_name" {
  description = "Docker network name"
  value       = module.network.network_name
}

output "app_info" {
  description = "Application information"
  value = {
    name        = var.app_name
    environment = var.environment
    frontend    = "http://localhost:${var.frontend_port}"
    backend     = "http://localhost:${var.backend_port}"
  }
}