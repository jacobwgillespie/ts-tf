# This causes `terraform init` to download the AWS provider locally

provider "aws" {
  version = "2.64.0"
  region  = "us-east-1"
}
