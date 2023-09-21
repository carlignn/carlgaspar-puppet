---
title: AWS Security Maturity Roadmap by Scott Piper
subtitle: Write-up from Scott Piper's blog on AWS Security Maturity Roadmap
date: 2023-09-20T16:00:00.000Z
header_img: /img/home-bg.jpg
---

## Most common security incidents

1. Publicly accessible resources such as S3 buckets or ElasticSearch clusters.
2. Leaked access keys. For example, access keys posted to GitHub.
3. Compromised IAM Roles through SSRF or RCE against an EC2, resulting in access to the metadata service at 169.254.169.254.

## AWS Security Maturity Roadmap

### Stage 1: Inventory

1. Identify all AWS accounts in the company and their points of contact.
2. Integrate AWS accounts into AWS Organizations.
3. Ensure all account root emails are on distribution lists.
4. Opt-out of AI services using your data.
5. Have an AWS account for Security.
6. Create budget alarms.
7. References

> If you don’t already have lots of AWS accounts, recognize that at this point you now have a minimum of 3 AWS accounts (an account that has your business stuff in it, the AWS Organization root account with nothing in it, and the Security account).

### Stage 2: Have backups

1. Create regular backups.

> As you learn what data you have in AWS, you should ensure that data is backed up to a separate AWS account in a separate region from where the data comes from (or possibly even somewhere off of AWS)

## References

[AWS Security Maturity Roadmap by Scott Piper](https://summitroute.com/downloads/aws_security_maturity_roadmap-Summit_Route.pdf)
