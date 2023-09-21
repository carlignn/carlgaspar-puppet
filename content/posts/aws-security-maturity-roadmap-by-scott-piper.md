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

> If you don’t already have lots of AWS accounts, recognize that at this point you now have a minimum of 3 AWS accounts (an account that has your business stuff in it, the AWS Organization root account with nothing in it, and the Security account).

### Stage 2: Have backups

1. Create regular backups.

> As you learn what data you have in AWS, you should ensure that data is backed up to a separate AWS account in a separate region from where the data comes from (or possibly even somewhere off of AWS)

### Stage 3: Visibility and initial remediation

1. Turn on CloudTrail, GuardDuty, and Access Analyzer for all accounts to send their logs and alerts to the Security account.
2.  Create an IAM role in every account that grants view access into the account from the Security account.
3.  Run a one-time scanning tool to identify tactical remediations.
4.  Turn on S3 Public Block Access.
5.  Develop an account initialization script and new account creation process.

### Stage 4: Detection

1. Send alerts to a ticketing system.
2. Enable investigations to logs.
3. Perform regular scanning of the accounts for security issues.
4. Document your security guidelines for your company.
5. Consider turning on other logging sources.

> As a first step, most companies will create a CloudWatch Event rule that sends the alerts directly to an SNS that goes to email or Slack messages. They then quickly realize they need to filter this through a Lambda or something with logic in it in order to ignore certain types of alerts. As their alert response processes mature, they also find they need to send these to a ticketing system. This enables them to track metrics, have an audit history, and perform escalations.

You want to ensure you can minimally do the following:

* Receive a notification about a GuardDuty alert from any of your accounts and any region you enabled it in.
* Be able to alert on Access Denied errors from CloudTrail logs, specifically for your production accounts.
* Be able to search through CloudTrail logs to see all of the actions performed by a principal during a time period.

Consider turning on more logging sources, such as the following, plus any others you might be using (full list of known log sources on AWS is [here](https://matthewdf10.medium.com/how-to-enable-logging-on-every-aws-service-in-existence-circa-2021-5b9105b87c9)):

* VPC DNS queries
* VPC Flow Logs (These are not as useful as many assume)
* CloudTrail S3 access and Lambda invokes
* S3 access logs
* Load balancers
* CloudFront

### References

[AWS Security Maturity Roadmap by Scott Piper](https://summitroute.com/downloads/aws_security_maturity_roadmap-Summit_Route.pdf)
