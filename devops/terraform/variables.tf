variable "frontend_port" {
  description = "Port for frontend"
  type        = number
  default     = 3000
}

variable "backend_port" {
  description = "Port for backend"
  type        = number
  default     = 8000
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "signlearn"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "local"
}

variable "frontend_image" {
  description = "Frontend Docker image"
  type        = string
  default     = "signlearn-pipeline-frontend:latest"
}

variable "backend_image" {
  description = "Backend Docker image"
  type        = string
  default     = "signlearn-pipeline-backend:latest"
}