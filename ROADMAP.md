# Cloud Computing and AWS: a certification-led roadmap

10 levels, about 1316 hours at 2 hours a day, from **2 Nov 2026** to **20 Aug 2028**. It starts with Linux and networking, covers eleven AWS certifications (Cloud Practitioner through Professional and Specialty, plus the new AI and data exams; Advanced Networking is left out because it retires before this plan could reach it), then adds Terraform, Kubernetes (CKA and CKS), Azure and Google Cloud, and a public portfolio. Every phase names a **free route** (US$0 of study cost) and, where it helps, a **paid route**. The only unavoidable cost is the exam fees.

It follows the format of the DBA Career Ladder and AI Engineer roadmaps on the Roadmaps platform: levels, dated phases, exams, qualifications, community and a milestone checklist. The same content is in `public/index.html`.

## Be honest about "top ten in the world"

Nobody publishes a global ranking of cloud engineers, so no roadmap can promise a place in one. What can be measured is **rarity and proof**:

- Holding every generally available AWS certification at the same time is the requirement for the AWS Golden Jacket. One community source estimates fewer than 300 holders worldwide. The jacket is awarded through partner, account-team or AWS-event routes, not an open application.
- The AWS list changes: one source says Advanced Networking – Specialty retires on 31 December 2026 (before this roadmap could reach it) and Machine Learning – Specialty stopped testing on 31 March 2026. So the "twelve" shifts; check AWS's current list.
- On top of AWS, this plan adds the CKA and CKS, Terraform Associate, Azure Administrator, Google Professional Cloud Architect, AWS Community Builder-style public work and a flagship project. That combination makes you one of the most credentialled cloud engineers anywhere. Whether that equals "top ten" depends on a ranking nobody keeps.

Also be honest about time: at 2 hours a day this is about 1.8 years. Certificates open interviews; the flagship project, post-mortems and public write-ups are what prove you can do the work.

## What it costs (exam fees, as read in October 2026)

| Credential | Fee | Level |
|---|---|---|
| AWS Cloud Practitioner (CLF-C02) | US$100 | 2 |
| AWS Solutions Architect – Associate (SAA-C03) | US$150 | 3 |
| AWS Developer – Associate (DVA-C02) | US$150 | 4 |
| AWS CloudOps Engineer – Associate | US$150 | 4 |
| Terraform Associate | about US$70 | 5 |
| Certified Kubernetes Administrator | about US$395 | 5 |
| AWS Solutions Architect – Professional (SAP-C02) | US$300 | 6 |
| AWS DevOps Engineer – Professional (DOP-C02) | US$300 | 7 |
| AWS Security – Specialty (SCS-C03) | US$300 | 8 |
| Certified Kubernetes Security Specialist | about US$395 | 8 |
| AWS AI Practitioner (AIF-C01) | US$100 | 9 |
| AWS Data Engineer – Associate (DEA-C01) | US$150 | 9 |
| AWS ML Engineer – Associate (MLA-C01) | US$150 | 9 |
| AWS Generative AI Developer – Professional (AIP-C01) | US$300 | 9 |
| Azure Administrator (AZ-104) | about US$165 | 10 |
| Google Professional Cloud Architect | about US$200 | 10 |

The AWS exams alone come to **US$2,150 before taxes and vouchers**; with the other credentials the total is about **US$3,400**. Ways to cut it:

1. **Space the exams out.** The plan puts the exams roughly one at a time, with Level 9 the heaviest (four in 14 weeks).
2. **Use the 50% voucher.** AWS gives a 50% discount voucher after you pass an exam, valid for your next one.
3. **Ask your employer or school.** Many pay exam fees; ask before you pay.
4. **Watch for sales and bundles** on Linux Foundation (CKA, CKS) and HashiCorp exams.
5. **Stay inside the free tier for labs.** New AWS accounts get a free plan with up to US$200 in credits for up to six months, and about 30 always-free services continue afterwards. Delete resources after every lab and keep a budget alarm.

Request the free **ESL +30 minutes** accommodation in your AWS Certification account before your first exam if English is not your first language. Exams can be taken at a Pearson VUE test centre or online proctored.

## The 10 levels

| Level | Dates | Hours | Focus |
|---|---|---|---|
| 1. Cloud foundations: Linux, networking, Git and scripting | 2 Nov 2026 – 13 Dec 2026 | 84 | Be comfortable in a Linux terminal, understand how networks and the web work, use Git, and write small Bash and Python scripts. Every later level depends on this. |
| 2. AWS Cloud Practitioner and your first safe account | 14 Dec 2026 – 24 Jan 2027 | 84 | Open and secure an AWS account, learn the core services and the shared responsibility model, and pass AWS Certified Cloud Practitioner. |
| 3. AWS Solutions Architect Associate: design real systems | 25 Jan 2027 – 21 Mar 2027 | 112 | Design secure, resilient, cost-aware architectures on AWS, and pass AWS Certified Solutions Architect Associate. This is the most recognised cloud certificate and the base for everything that follows. |
| 4. Developer and CloudOps Associates: serverless, delivery and operations | 22 Mar 2027 – 16 May 2027 | 112 | Build and run applications on AWS the way teams do: serverless code, pipelines, monitoring and incident response. Pass AWS Certified Developer – Associate and AWS Certified CloudOps Engineer – Associate. |
| 5. Infrastructure as code, containers and Kubernetes | 17 May 2027 – 25 Jul 2027 | 140 | Describe all infrastructure as code, package apps in containers, and run Kubernetes yourself. Earn the HashiCorp Terraform Associate and the Certified Kubernetes Administrator (CKA). |
| 6. AWS Solutions Architect Professional: enterprise-scale design | 26 Jul 2027 – 17 Oct 2027 | 168 | Design multi-account, hybrid and highly available AWS systems for large organisations and migrate them safely, and pass AWS Certified Solutions Architect – Professional. |
| 7. AWS DevOps Engineer Professional: automation and reliability | 18 Oct 2027 – 26 Dec 2027 | 140 | Automate delivery, governance and recovery across many accounts, practise site reliability engineering, and pass AWS Certified DevOps Engineer – Professional. |
| 8. Cloud security: AWS Security Specialty and Kubernetes security | 27 Dec 2027 – 5 Mar 2028 | 140 | Secure identities, data, networks and clusters, detect and respond to attacks, and earn AWS Certified Security – Specialty and the Certified Kubernetes Security Specialist (CKS). |
| 9. Data and AI on AWS: four more certifications | 6 Mar 2028 – 11 Jun 2028 | 196 | Build data pipelines and AI systems on AWS and earn the AI Practitioner, Data Engineer – Associate, Machine Learning Engineer – Associate and Generative AI Developer – Professional certificates. |
| 10. Multi-cloud, proof of skill and the elite audit | 12 Jun 2028 – 20 Aug 2028 | 140 | Add Azure and Google Cloud credentials, publish proof of what you can do, and audit yourself against the rarest recognised achievements in cloud. |

## Level 1: Cloud foundations: Linux, networking, Git and scripting

**2 Nov 2026 – 13 Dec 2026 · 84 hours.** Be comfortable in a Linux terminal, understand how networks and the web work, use Git, and write small Bash and Python scripts. Every later level depends on this.

### 2 – 15 Nov

Linux first. Free route: work through Linux Journey and the OverTheWire Bandit game, and do the Linux Foundation’s free Introduction to Linux (LFS101) course in audit mode. Paid route: none needed. Set up a Linux machine you can break: a free Ubuntu virtual machine (VirtualBox) or WSL on Windows. Learn files and permissions, users, processes, systemd services, package managers, SSH keys and cron.

[Linux Journey](https://linuxjourney.com/) · [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) · [LFS101: Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/) · [The Missing Semester (MIT)](https://missing.csail.mit.edu/)

### 16 – 29 Nov

Networking that cloud work really uses. Free route: Professor Messer’s free networking videos and the practical networking lessons from freeCodeCamp. Learn IP addressing and CIDR subnetting, DNS, TCP vs UDP, HTTP and TLS, NAT, firewalls and load balancers. Practise with ping, traceroute, dig, curl and Wireshark. Subnetting by hand is the single most useful skill for the VPC levels that follow.

[Professor Messer free videos](https://www.professormesser.com/) · [freeCodeCamp](https://www.freecodecamp.org/) · [Wireshark](https://www.wireshark.org/) · [Subnetting practice](https://subnetting.org/)

### 30 Nov – 6 Dec

Git and GitHub. Free route: GitHub Skills courses and the Pro Git book. Branches, pull requests, merge conflicts, .gitignore, and GitHub Actions for a first automated workflow. Create the repo called cloud-journey for your notes and labs; everything you build from here goes in it.

[GitHub Skills](https://skills.github.com/) · [Pro Git book](https://git-scm.com/book/en/v2) · [GitHub](https://github.com/)

### 7 – 13 Dec

Scripting and your first deploy. Free route: Bash scripting from the Missing Semester plus CS50’s Python (CS50P) lectures 0–3 for Python basics. Write a Bash backup script and a Python script that calls a public API. Checkpoint 13 Dec 2026: serve a small website from your Linux VM, put it behind a firewall rule, and back it up with your script.

[CS50P (Python)](https://cs50.harvard.edu/python/) · [Bash manual](https://www.gnu.org/software/bash/manual/)

> Weekly rhythm used in every level: Monday and Tuesday learn, Wednesday and Thursday hands-on lab, Friday review and practice questions, Saturday build on your flagship project (or sit an exam), Sunday publish a short note on what broke and how you fixed it. Cost in this level: US$0.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 13 Dec 2026 | Checkpoint 1: a hardened Linux web server with a backup script | Free | Foundations checkpoint signed off by your mentor |

**You should hold:** Comfortable in a Linux terminal and SSH; Can subnet a network by hand; Git and GitHub workflow with a public cloud-journey repo; Small Bash and Python scripts that work.

**Milestones**

- [ ] Study group formed and first call held
- [ ] Linux VM running and snapshotted
- [ ] OverTheWire Bandit to level 15
- [ ] Can subnet a /24 into four networks without a calculator
- [ ] cloud-journey repo created and used daily
- [ ] Checkpoint 1 signed off

## Level 2: AWS Cloud Practitioner and your first safe account

**14 Dec 2026 – 24 Jan 2027 · 84 hours.** Open and secure an AWS account, learn the core services and the shared responsibility model, and pass AWS Certified Cloud Practitioner.

### 14 – 20 Dec

Open your AWS account safely before anything else. Free route: new AWS accounts get a free plan with up to US$200 in credits (US$100 at sign-up, more for using services), lasting up to six months or until the credits run out, and about 30 always-free services continue afterwards. Turn on MFA for the root user, create an admin IAM Identity Center or IAM user, stop using root, and create a budget alert at US$1 and a billing alarm. Never put access keys in code or Git.

[AWS Free Tier](https://aws.amazon.com/free/) · [AWS Skill Builder](https://skillbuilder.aws/) · [AWS Billing and Cost Management](https://aws.amazon.com/aws-cost-management/)

### 21 Dec – 10 Jan

Learn the services. Free route: AWS Skill Builder’s free Cloud Practitioner Essentials and Exam Prep courses, plus freeCodeCamp’s free full course for the exam (check it covers CLF-C02, the current version). Paid route: one video course (about US$15–20 on sale) if you prefer a structured set of labs. Cover regions and availability zones, IAM, EC2, S3, VPC basics, RDS, Lambda, CloudFront, CloudWatch, pricing models and the shared responsibility model. Do one small lab per service in your own account and delete it afterwards.

[AWS Cloud Practitioner exam page](https://aws.amazon.com/certification/certified-cloud-practitioner/) · [AWS Skill Builder](https://skillbuilder.aws/) · [freeCodeCamp on YouTube](https://www.youtube.com/@freecodecamp) · [AWS Workshops](https://workshops.aws/)

### 11 – 17 Jan

Exam practice. Free route: the free official practice question set in Skill Builder, then every question you got wrong written up in your own words. Paid route: one set of third-party practice exams (about US$15). Aim for 85% on practice before you book. Book on Pearson VUE (test centre or online proctored) at least two weeks ahead. If English is not your first language, request the free ESL +30 minutes accommodation in your AWS Certification account before your first booking.

[AWS Certification account](https://aws.amazon.com/certification/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws) · [Tutorials Dojo](https://tutorialsdojo.com/)

### 18 – 24 Jan

Sit the exam, then use the week to start the flagship project. Exam: 16 Jan 2027 (65 questions, 90 minutes, pass at 700 out of 1000; details can change, so confirm on the exam page). After you pass, collect your AWS 50% discount voucher for the next exam from your certification account, and share your Credly badge.

[Credly](https://www.credly.com/) · [AWS Certification benefits](https://aws.amazon.com/certification/benefits/)

> Money in this level: the exam costs about US$100 plus any local tax. The free route is study material at US$0; the optional paid route adds US$15–35 for a video course and practice exams. Start the flagship project: a small web app you will rebuild and improve in every level (a booking tool, a clinic record system or a school portal). This level: a static site on S3 behind CloudFront.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 16 Jan 2027 | [AWS Certified Cloud Practitioner (CLF-C02)](https://aws.amazon.com/certification/certified-cloud-practitioner/) | US$100 plus tax | AWS Certified Cloud Practitioner (valid 3 years) and a Credly badge |

**You should hold:** AWS Certified Cloud Practitioner; A secured AWS account with MFA, budgets and no root use; A static site deployed on S3 and CloudFront.

**Milestones**

- [ ] AWS account secured: MFA, budget alert, no root use
- [ ] Free Cloud Practitioner course completed in Skill Builder
- [ ] One lab per core service completed and cleaned up
- [ ] 85% on practice questions
- [ ] Cloud Practitioner exam passed
- [ ] Flagship v1 (static site on S3 and CloudFront) live

## Level 3: AWS Solutions Architect Associate: design real systems

**25 Jan 2027 – 21 Mar 2027 · 112 hours.** Design secure, resilient, cost-aware architectures on AWS, and pass AWS Certified Solutions Architect Associate. This is the most recognised cloud certificate and the base for everything that follows.

### 25 Jan – 7 Feb

Networking and compute. Free route: AWS Skill Builder’s free Exam Prep for SAA-C03 plus AWS Workshops. Paid route: one full video course with labs (about US$20–45 on sale). Build a VPC from scratch with public and private subnets, route tables, an internet gateway, a NAT gateway and security groups vs network ACLs. Then EC2 (instance types, pricing, Auto Scaling, load balancers) and Elastic Load Balancing. Delete NAT gateways after labs: they cost money every hour.

[SAA-C03 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-associate/) · [AWS Workshops](https://workshops.aws/) · [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### 8 – 21 Feb

Storage, databases and identity. S3 (storage classes, lifecycle, replication, encryption, bucket policies), EBS and EFS, RDS and Aurora (Multi-AZ, read replicas), DynamoDB (keys, capacity, indexes), ElastiCache. IAM deeply: policies, roles, trust policies, permission boundaries, SCPs, and how a request is evaluated. Lab: lock down an S3 bucket and prove that a role can read it while another cannot.

[AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/) · [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/) · [S3 documentation](https://docs.aws.amazon.com/s3/)

### 22 Feb – 7 Mar

Resilience, decoupling and cost. Route 53 routing policies, CloudFront, SQS, SNS, EventBridge, Lambda and API Gateway, disaster-recovery patterns (backup and restore, pilot light, warm standby, active-active), and cost tools (Cost Explorer, Budgets, Savings Plans, Spot). Flagship v2: split your app into web, app and database tiers across two availability zones, with a written design document.

[Route 53 documentation](https://docs.aws.amazon.com/route53/) · [AWS Architecture Center](https://aws.amazon.com/architecture/) · [AWS Pricing Calculator](https://calculator.aws/)

### 8 – 21 Mar

Practice and exam. Official practice questions in Skill Builder (free), then third-party practice exams (about US$15) until you score 85% repeatedly, reading every explanation. Book at least three weeks ahead; use your 50% voucher if you earned one. Exam 20 Mar 2027 (65 questions, 130 minutes, pass at 720 out of 1000).

[AWS Skill Builder](https://skillbuilder.aws/) · [Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this level: exam about US$150 (US$75 with a voucher). Keep your lab spend near zero: delete NAT gateways, load balancers and RDS instances at the end of every lab, and check Cost Explorer every Friday. Stopping a resource is not always the same as deleting it.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 20 Mar 2027 | [AWS Certified Solutions Architect – Associate (SAA-C03)](https://aws.amazon.com/certification/certified-solutions-architect-associate/) | US$150 plus tax | AWS Certified Solutions Architect – Associate (valid 3 years) and a Credly badge |

**You should hold:** AWS Certified Solutions Architect – Associate; A written, reviewed three-tier architecture across two availability zones; Hands-on VPC, IAM and S3 policy skills you can demonstrate.

**Milestones**

- [ ] VPC built from scratch with public and private subnets
- [ ] IAM policy evaluation explained in your own words
- [ ] S3 bucket policy lab proven with two roles
- [ ] Flagship v2: two-AZ three-tier app with a design document
- [ ] 85% on practice exams three times
- [ ] Solutions Architect Associate passed

## Level 4: Developer and CloudOps Associates: serverless, delivery and operations

**22 Mar 2027 – 16 May 2027 · 112 hours.** Build and run applications on AWS the way teams do: serverless code, pipelines, monitoring and incident response. Pass AWS Certified Developer – Associate and AWS Certified CloudOps Engineer – Associate.

### 22 Mar – 11 Apr

Developer track. Free route: AWS Skill Builder Exam Prep for DVA-C02 and the AWS SDK docs. Build a serverless API: API Gateway, Lambda (Python or Node), DynamoDB, Cognito for sign-in, S3 events, Step Functions, SQS and SNS. Learn the AWS CLI, SDK credentials and IAM roles for Lambda. Flagship v3: move the app’s backend to serverless.

[DVA-C02 exam guide](https://aws.amazon.com/certification/certified-developer-associate/) · [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/) · [AWS SAM](https://aws.amazon.com/serverless/sam/)

### 12 – 25 Apr

Delivery on AWS. CodeCommit’s status has changed over the years, so use GitHub with GitHub Actions or CodePipeline and CodeBuild for CI/CD. Deploy with AWS SAM or CloudFormation, use blue/green deployments, manage secrets with Secrets Manager and Parameter Store, and encrypt with KMS. Practice questions, then sit 24 Apr 2027 (65 questions, 130 minutes, pass at 720 out of 1000).

[GitHub Actions](https://docs.github.com/actions) · [AWS CloudFormation](https://docs.aws.amazon.com/cloudformation/) · [AWS KMS](https://docs.aws.amazon.com/kms/)

### 26 Apr – 9 May

Operations track (CloudOps Engineer – Associate, which replaced SysOps Administrator). Learn CloudWatch metrics, logs, alarms and dashboards, Systems Manager (Session Manager, Patch Manager, Run Command), EventBridge automation, AWS Config and CloudTrail, backups with AWS Backup, and troubleshooting networks and permissions. The exam includes hands-on style tasks; practise in a live account.

[CloudOps Associate exam page](https://aws.amazon.com/certification/) · [CloudWatch documentation](https://docs.aws.amazon.com/cloudwatch/) · [Systems Manager documentation](https://docs.aws.amazon.com/systems-manager/)

### 10 – 16 May

Incident week. Break your own flagship app on purpose (kill a database, fill a disk, revoke a role), find the cause from logs and metrics, fix it, and write a blameless post-mortem. Sit 15 May 2027. Check the exam page for the current code and format before booking: the exam changed from SysOps to CloudOps recently.

[Google SRE book (free)](https://sre.google/sre-book/table-of-contents/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this level: two exams at about US$150 each (US$225 with one 50% voucher). The two exams overlap on CloudWatch, IAM and deployment topics, so the second takes far less study than the first. Put serverless work in the free tier: Lambda and DynamoDB are cheap or free at lab scale.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 24 Apr 2027 | [AWS Certified Developer – Associate (DVA-C02)](https://aws.amazon.com/certification/certified-developer-associate/) | US$150 plus tax | AWS Certified Developer – Associate (valid 3 years) |
| 15 May 2027 | [AWS Certified CloudOps Engineer – Associate](https://aws.amazon.com/certification/) | US$150 plus tax | AWS Certified CloudOps Engineer – Associate (valid 3 years) |

**You should hold:** AWS Certified Developer – Associate; AWS Certified CloudOps Engineer – Associate; A serverless API with sign-in, a pipeline and monitoring; A written post-mortem for an incident you caused and fixed.

**Milestones**

- [ ] Serverless API with Cognito deployed with SAM or CloudFormation
- [ ] Pipeline deploys on every push
- [ ] CloudWatch dashboard and alarms for the flagship app
- [ ] Systems Manager Session Manager used instead of open SSH
- [ ] Post-mortem written and published
- [ ] Developer and CloudOps Associates passed

## Level 5: Infrastructure as code, containers and Kubernetes

**17 May 2027 – 25 Jul 2027 · 140 hours.** Describe all infrastructure as code, package apps in containers, and run Kubernetes yourself. Earn the HashiCorp Terraform Associate and the Certified Kubernetes Administrator (CKA).

### 17 – 30 May

Docker and containers. Free route: Docker’s official getting-started guide and Play with Docker. Write Dockerfiles, use multi-stage builds, compose multi-container apps, scan images, push to Amazon ECR. Flagship v4: containerise the app.

[Docker docs](https://docs.docker.com/get-started/) · [Play with Docker](https://labs.play-with-docker.com/) · [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/)

### 31 May – 20 Jun

Terraform. Free route: HashiCorp’s free tutorials. Providers, state and remote state (S3 plus locking), variables, modules, workspaces, data sources, lifecycle and import. Rebuild your whole flagship stack in Terraform and keep it in Git with a pipeline that runs plan on pull requests. Also read how CloudFormation and CDK differ, because AWS exams ask about both.

[Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) · [Terraform Associate certification](https://developer.hashicorp.com/certifications/infrastructure-automation) · [AWS CDK](https://docs.aws.amazon.com/cdk/)

### 21 – 27 Jun

Terraform exam week. Practice questions from HashiCorp’s sample questions and a practice set (about US$10–15). Sit 26 Jun 2027 (online proctored, about an hour). Check the current exam version and price on the HashiCorp page before booking.

[HashiCorp certifications](https://developer.hashicorp.com/certifications)

### 28 Jun – 18 Jul

Kubernetes. Free route: the free LFS158 Introduction to Kubernetes, Killercoda labs and Kelsey Hightower’s Kubernetes the Hard Way. Learn pods, deployments, services, ingress, config and secrets, storage, RBAC, scheduling, networking and cluster upgrades with kubeadm, plus etcd backup and restore. Run your containerised flagship app on Amazon EKS using Terraform, then tear it down (EKS costs money by the hour).

[Kubernetes docs](https://kubernetes.io/docs/home/) · [Killercoda](https://killercoda.com/) · [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) · [CKA programme](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/)

### 19 – 25 Jul

CKA exam week. The CKA is a hands-on, two-hour terminal exam. Your exam purchase includes two sessions of the killer.sh simulator: use them, and work through the exam’s allowed documentation fast. Sit 24 Jul 2027. Your fee normally includes one free retake within a year; confirm on the Linux Foundation page.

[killer.sh](https://killer.sh/) · [Linux Foundation certifications](https://training.linuxfoundation.org/certification/)

> Money in this level: Terraform Associate about US$70 and CKA about US$395 (confirm both), so about US$465 in all. Look for Linux Foundation sale periods and bundles before you book; they are often much cheaper than list price. EKS control planes cost about US$0.10 an hour: create and destroy them inside one study session.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 26 Jun 2027 | [HashiCorp Certified: Terraform Associate](https://developer.hashicorp.com/certifications/infrastructure-automation) | About US$70 (confirm) | HashiCorp Certified: Terraform Associate |
| 24 Jul 2027 | [Certified Kubernetes Administrator (CKA)](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/) | About US$395 (confirm; sales are common) | Certified Kubernetes Administrator (CNCF) |

**You should hold:** HashiCorp Certified: Terraform Associate; Certified Kubernetes Administrator (CKA); The whole flagship stack in Terraform, running on EKS and torn down by one command.

**Milestones**

- [ ] App containerised and pushed to ECR
- [ ] Whole stack reproducible from Terraform
- [ ] Remote state with locking
- [ ] Pull requests run terraform plan automatically
- [ ] etcd backup and restore practised
- [ ] Terraform Associate and CKA passed

## Level 6: AWS Solutions Architect Professional: enterprise-scale design

**26 Jul 2027 – 17 Oct 2027 · 168 hours.** Design multi-account, hybrid and highly available AWS systems for large organisations and migrate them safely, and pass AWS Certified Solutions Architect – Professional.

### 26 Jul – 15 Aug

Multi-account foundations. AWS Organizations, Control Tower, service control policies, IAM Identity Center, centralised logging and billing, and tagging. Free route: the AWS Control Tower and Organizations workshops, plus the free Exam Prep for SAP-C02 in Skill Builder. Build a three-account landing zone (management, security, workload).

[SAP-C02 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-professional/) · [AWS Organizations](https://docs.aws.amazon.com/organizations/) · [AWS Control Tower](https://docs.aws.amazon.com/controltower/)

### 16 Aug – 5 Sep

Networking at scale. Transit Gateway, VPC peering vs PrivateLink, Direct Connect and Site-to-Site VPN concepts, Route 53 Resolver, hybrid DNS, CloudFront and Global Accelerator. You cannot take the Advanced Networking Specialty (it is due to retire at the end of 2026), so use its free exam guide and whitepapers as your study outline for this phase.

[AWS whitepapers](https://aws.amazon.com/whitepapers/) · [Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/) · [PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/)

### 6 – 26 Sep

Migration, modernisation and resilience. The seven Rs of migration, Database Migration Service, Application Migration Service, hybrid storage, multi-region designs, RTO and RPO, and chaos testing with AWS Fault Injection Service. Cost optimisation at organisation level. Flagship v5: a two-region design with a tested failover and a written decision record for each trade-off.

[AWS Prescriptive Guidance](https://aws.amazon.com/prescriptive-guidance/) · [AWS Fault Injection Service](https://docs.aws.amazon.com/fis/) · [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/)

### 27 Sep – 17 Oct

Practice and exam. Professional questions are long scenarios with several plausible answers: practise eliminating answers by the requirement that rules them out (cost, latency, operational effort, security). Use three full-length practice exams, then sit 16 Oct 2027 (75 questions, 180 minutes, pass at 750 out of 1000). Expect 150 or more hours of study for most people.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this level: exam about US$300 (US$150 with a 50% voucher). This is the hardest scheduled exam so far. If your practice scores stay under 75% two weeks before the date, move the exam by two weeks with your mentor rather than sit it unready; rescheduling is allowed up to 24 hours before, limited to two changes per appointment.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 16 Oct 2027 | [AWS Certified Solutions Architect – Professional (SAP-C02)](https://aws.amazon.com/certification/certified-solutions-architect-professional/) | US$300 plus tax | AWS Certified Solutions Architect – Professional (valid 3 years; also renews the Associate) |

**You should hold:** AWS Certified Solutions Architect – Professional; A multi-account landing zone you built and documented; A tested two-region failover with decision records.

**Milestones**

- [ ] Three-account landing zone built with SCPs and central logging
- [ ] Transit Gateway lab completed
- [ ] Two-region failover tested and timed
- [ ] Decision records written for each major trade-off
- [ ] Three full practice exams above 80%
- [ ] Solutions Architect Professional passed

## Level 7: AWS DevOps Engineer Professional: automation and reliability

**18 Oct 2027 – 26 Dec 2027 · 140 hours.** Automate delivery, governance and recovery across many accounts, practise site reliability engineering, and pass AWS Certified DevOps Engineer – Professional.

### 18 Oct – 7 Nov

CI/CD at depth. CodePipeline, CodeBuild, CodeDeploy (in-place, blue/green, canary), GitHub Actions with OIDC to AWS (no stored keys), deployment strategies for EC2, ECS, Lambda and EKS, and automated rollback on alarms. Flagship v6: a pipeline that tests, deploys to staging, runs a smoke test and promotes to production with automatic rollback.

[DOP-C02 exam guide](https://aws.amazon.com/certification/certified-devops-engineer-professional/) · [GitHub OIDC with AWS](https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) · [CodeDeploy](https://docs.aws.amazon.com/codedeploy/)

### 8 – 28 Nov

Infrastructure at scale. CloudFormation StackSets, nested stacks and drift detection, CDK pipelines, Service Catalog, ECS and Fargate in production, Systems Manager automation, AWS Config conformance packs and auto-remediation, tagging and policy as code.

[AWS CDK Workshop](https://cdkworkshop.com/) · [AWS Config](https://docs.aws.amazon.com/config/) · [ECS documentation](https://docs.aws.amazon.com/ecs/)

### 29 Nov – 12 Dec

Observability and reliability. CloudWatch Logs Insights, OpenTelemetry, X-Ray tracing, SLOs and error budgets, alerting that does not wake people for nothing, and runbooks. Read the free Google SRE book chapters on service level objectives and incident response. Hold a game day: inject failures and recover using your runbooks.

[OpenTelemetry](https://opentelemetry.io/docs/) · [Google SRE book (free)](https://sre.google/sre-book/table-of-contents/) · [AWS X-Ray](https://docs.aws.amazon.com/xray/)

### 13 – 26 Dec

Practice and exam. Official Skill Builder questions, then a third-party full-length set; scenario questions are long, so read for the one constraint that decides the answer. Sit 18 Dec 2027 (75 questions, 180 minutes, pass at 750 out of 1000). The date falls just before the year-end holidays: if work or family make it unrealistic, agree a new date with your mentor.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this level: exam about US$300 (US$150 with a 50% voucher). Passing the Professional DevOps exam can recertify the Associate-level Developer and CloudOps certificates in the same family, which saves repeat exam fees later; confirm AWS’s current recertification rules.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 18 Dec 2027 | [AWS Certified DevOps Engineer – Professional (DOP-C02)](https://aws.amazon.com/certification/certified-devops-engineer-professional/) | US$300 plus tax | AWS Certified DevOps Engineer – Professional (valid 3 years) |

**You should hold:** AWS Certified DevOps Engineer – Professional; A pipeline with staged promotion and automatic rollback; Published runbooks and a game-day report.

**Milestones**

- [ ] GitHub Actions deploys to AWS with OIDC and no stored keys
- [ ] Blue/green or canary deployment with auto-rollback
- [ ] StackSets or CDK pipeline across two accounts
- [ ] SLOs and alerts defined for the flagship app
- [ ] Game day held and report published
- [ ] DevOps Engineer Professional passed

## Level 8: Cloud security: AWS Security Specialty and Kubernetes security

**27 Dec 2027 – 5 Mar 2028 · 140 hours.** Secure identities, data, networks and clusters, detect and respond to attacks, and earn AWS Certified Security – Specialty and the Certified Kubernetes Security Specialist (CKS).

### 27 Dec – 16 Jan

Identity and data protection. Advanced IAM (conditions, session policies, cross-account roles, IAM Access Analyzer), KMS key policies and envelope encryption, Secrets Manager, ACM, S3 Block Public Access and Macie, and logging with CloudTrail, VPC Flow Logs and Config. Free route: AWS Security workshops and the Exam Prep for the current Security Specialty (SCS-C03).

[Security Specialty exam page](https://aws.amazon.com/certification/certified-security-specialty/) · [AWS Security workshops](https://catalog.workshops.aws/) · [IAM Access Analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html)

### 17 Jan – 6 Feb

Detection and response, and attacking your own account. Use free vulnerable-by-design labs: flaws.cloud, flaws2.cloud and CloudGoat. Learn GuardDuty, Security Hub, Inspector, Detective, WAF, Shield, Network Firewall, and incident-response playbooks (isolate an instance, rotate credentials, snapshot evidence). Scan your own account with Prowler. Only test accounts you own.

[flaws.cloud](http://flaws.cloud/) · [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) · [Prowler](https://github.com/prowler-cloud/prowler) · [GuardDuty](https://docs.aws.amazon.com/guardduty/)

### 7 – 13 Feb

AWS Security exam week. Practice exams until you are above 80%, then sit 12 Feb 2028 (65 questions, about 170 minutes, pass at 750 out of 1000; AWS lists three to five years of security experience as recommended, which lab work only partly covers, so study scenario questions carefully).

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

### 14 Feb – 5 Mar

Kubernetes security. The CKS requires an active CKA. Study cluster hardening, RBAC least privilege, Pod Security Standards, network policies, secrets handling, image scanning with Trivy, runtime detection with Falco, audit logs and supply-chain controls. Free route: Killercoda scenarios and the Kubernetes security docs. Sit 4 Mar 2028 (hands-on, about two hours; the killer.sh simulator comes with the purchase).

[CKS programme](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/) · [Trivy](https://trivy.dev/) · [Falco](https://falco.org/) · [Killercoda](https://killercoda.com/)

> Money in this level: Security Specialty about US$300 (US$150 with a voucher) and CKS about US$395, so about US$545–695. The AWS Machine Learning Specialty was retired for new test-takers on 31 March 2026, so it is not planned. Never run attacks against accounts you do not own.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 12 Feb 2028 | [AWS Certified Security – Specialty (SCS-C03)](https://aws.amazon.com/certification/certified-security-specialty/) | US$300 plus tax | AWS Certified Security – Specialty (valid 3 years) |
| 4 Mar 2028 | [Certified Kubernetes Security Specialist (CKS)](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/) | About US$395 (confirm) | Certified Kubernetes Security Specialist (CNCF) |

**You should hold:** AWS Certified Security – Specialty; Certified Kubernetes Security Specialist; A written threat model and incident-response playbook for the flagship app.

**Milestones**

- [ ] flaws.cloud and flaws2.cloud finished with write-ups
- [ ] CloudGoat scenario solved and the fix documented
- [ ] GuardDuty, Security Hub and Config enabled and triaged
- [ ] Threat model and incident playbook for the flagship app
- [ ] CKS lab: network policies, Falco rule and Trivy scan in a pipeline
- [ ] Security Specialty and CKS passed

## Level 9: Data and AI on AWS: four more certifications

**6 Mar 2028 – 11 Jun 2028 · 196 hours.** Build data pipelines and AI systems on AWS and earn the AI Practitioner, Data Engineer – Associate, Machine Learning Engineer – Associate and Generative AI Developer – Professional certificates.

### 6 – 26 Mar

AI foundations. Free route: AWS Skill Builder’s free AI Practitioner Exam Prep and the AWS generative AI learning plans, plus Google Skills’ free generative AI path. Learn machine-learning concepts, responsible AI, prompt engineering, Amazon Bedrock basics and when not to use AI. Sit 25 Mar 2028 (a foundational exam with about 65 questions; check the page for the current format).

[AI Practitioner exam page](https://aws.amazon.com/certification/certified-ai-practitioner/) · [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/) · [AWS Skill Builder](https://skillbuilder.aws/)

### 27 Mar – 30 Apr

Data engineering. Free route: the Data Engineering Zoomcamp (free, with a certificate) for the concepts, then AWS Exam Prep for the Data Engineer – Associate. Build an ingestion pipeline: S3 data lake, Glue crawlers and jobs, Athena, Kinesis or MSK streaming, Redshift basics, Lake Formation permissions and orchestration with Step Functions or MWAA. Flagship v7: reporting from a real data stream. Sit 29 Apr 2028.

[Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) · [Data Engineer Associate](https://aws.amazon.com/certification/certified-data-engineer-associate/) · [AWS Glue](https://docs.aws.amazon.com/glue/) · [Amazon Athena](https://docs.aws.amazon.com/athena/)

### 1 – 21 May

Machine learning engineering. Free route: the MLOps Zoomcamp and the fast.ai practical course. SageMaker training, tuning, endpoints and pipelines, feature stores, model monitoring and drift, CI/CD for models. Train and deploy one small model, monitor it, and shut it down to stop charges. Sit 20 May 2028.

[MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp) · [ML Engineer Associate](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/) · [Practical Deep Learning (fast.ai)](https://course.fast.ai/) · [SageMaker docs](https://docs.aws.amazon.com/sagemaker/)

### 22 May – 11 Jun

Generative AI in production. Retrieval-augmented generation (RAG) with Bedrock Knowledge Bases or your own vector store, agents, guardrails, evaluation, cost control and latency, and prompt and model governance. Flagship v8: a RAG assistant over your flagship app’s documents with measured answer quality. Sit 10 Jun 2028 (Generative AI Developer – Professional; confirm its current code and length).

[Generative AI Developer Professional](https://aws.amazon.com/certification/) · [Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) · [AWS generative AI workshops](https://catalog.workshops.aws/)

> Money in this level: AI Practitioner US$100, Data Engineer US$150, ML Engineer US$150 and Generative AI Developer US$300, so about US$700 before vouchers. Four exams in 14 weeks is the heaviest schedule in this roadmap: if you fall behind, move the last two exams, not the study time. AI services bill by usage, so set a budget alarm before you start and tear down every endpoint after each lab.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 25 Mar 2028 | [AWS Certified AI Practitioner (AIF-C01)](https://aws.amazon.com/certification/certified-ai-practitioner/) | US$100 plus tax | AWS Certified AI Practitioner (valid 3 years) |
| 29 Apr 2028 | [AWS Certified Data Engineer – Associate (DEA-C01)](https://aws.amazon.com/certification/certified-data-engineer-associate/) | US$150 plus tax | AWS Certified Data Engineer – Associate (valid 3 years) |
| 20 May 2028 | [AWS Certified Machine Learning Engineer – Associate (MLA-C01)](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/) | US$150 plus tax | AWS Certified Machine Learning Engineer – Associate (valid 3 years) |
| 10 Jun 2028 | [AWS Certified Generative AI Developer – Professional (AIP-C01)](https://aws.amazon.com/certification/) | US$300 plus tax | AWS Certified Generative AI Developer – Professional (valid 3 years) |

**You should hold:** AWS Certified AI Practitioner; AWS Certified Data Engineer – Associate; AWS Certified Machine Learning Engineer – Associate; AWS Certified Generative AI Developer – Professional; A working RAG assistant with measured quality.

**Milestones**

- [ ] Budget alarm set before any AI lab
- [ ] Data lake with Glue, Athena and permissions built
- [ ] Streaming pipeline running for a week
- [ ] One model trained, deployed, monitored and shut down
- [ ] RAG assistant evaluated with a written test set
- [ ] AI Practitioner, Data Engineer, ML Engineer and GenAI Developer passed

## Level 10: Multi-cloud, proof of skill and the elite audit

**12 Jun 2028 – 20 Aug 2028 · 140 hours.** Add Azure and Google Cloud credentials, publish proof of what you can do, and audit yourself against the rarest recognised achievements in cloud.

### 12 Jun – 16 Jul

Azure. Free route: Microsoft Learn’s free AZ-104 (Azure Administrator) path and an Azure free account. Map every AWS idea you know to Azure: Entra ID against IAM, virtual networks against VPCs, Azure Monitor against CloudWatch, Bicep against CloudFormation. Rebuild one part of your flagship app on Azure with Terraform. Sit 15 Jul 2028.

[AZ-104 certification](https://learn.microsoft.com/credentials/certifications/azure-administrator/) · [Microsoft Learn](https://learn.microsoft.com/training/) · [Azure free account](https://azure.microsoft.com/free/)

### 17 Jul – 13 Aug

Google Cloud. Free route: Google Skills (Cloud Skills Boost) free labs and the free Google Cloud tier. Learn projects and IAM, VPCs, Compute Engine, GKE, Cloud Run, Cloud Storage, BigQuery and Cloud Monitoring. Sit 12 Aug 2028 (Professional Cloud Architect; check Google’s page for the current exam, price and format).

[Google Cloud certifications](https://cloud.google.com/learn/certification) · [Professional Cloud Architect](https://cloud.google.com/learn/certification/cloud-architect) · [Google Skills](https://www.skills.google/)

### 14 – 20 Aug

The elite audit. Write a public page that lists every credential with its Credly link, your flagship project with architecture diagrams, cost figures and post-mortems, and your talks and posts. Then audit against the achievements below and plan your next 12 months. Mentor review: 20 Aug 2028.

[Credly](https://www.credly.com/) · [AWS Community Builders](https://aws.amazon.com/developer/community/community-builders/) · [AWS Heroes](https://aws.amazon.com/developer/community/heroes/)

> Money in this level: AZ-104 about US$165 and the Google exam about US$200 (confirm both). About “top ten in the world”: no organisation publishes a global ranking of cloud engineers, so nobody can promise you a place in one. What can be measured is rarity and proof. Holding every current AWS certification at once is the requirement for the AWS Golden Jacket, which one community source estimates has fewer than 300 holders worldwide; the jacket itself is awarded through partner, account-team or event routes rather than an open application. Add the CKA and CKS, Terraform, Azure and Google professional credentials, AWS Community Builder or Hero recognition, and public work, and you will be among the most credentialled cloud engineers anywhere. Whether that is the top ten depends on a ranking nobody keeps. The twelve-certificate set also changes as AWS retires and adds exams (Advanced Networking is due to retire at the end of 2026), so check the current list.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 15 Jul 2028 | [Microsoft Certified: Azure Administrator Associate (AZ-104)](https://learn.microsoft.com/credentials/certifications/azure-administrator/) | About US$165 (confirm) | Microsoft Certified: Azure Administrator Associate |
| 12 Aug 2028 | [Google Cloud Professional Cloud Architect](https://cloud.google.com/learn/certification/cloud-architect) | About US$200 (confirm) | Google Cloud Professional Cloud Architect |
| 20 Aug 2028 | Checkpoint 10: the elite audit and public portfolio review | Free | Capstone signed off by your mentor |

**You should hold:** Microsoft Certified: Azure Administrator Associate; Google Cloud Professional Cloud Architect; A public portfolio page with every credential and project; A written 12-month plan for the rarest remaining credentials.

**Milestones**

- [ ] Azure AZ-104 passed
- [ ] One part of the flagship app running on Azure via Terraform
- [ ] Google Cloud Professional Cloud Architect passed
- [ ] Public portfolio page live
- [ ] Applied to AWS Community Builders or published 10 technical posts
- [ ] Elite audit completed and signed off

## Honest limits

- Exam codes, prices, lengths and retirement dates change. They were read from AWS pages and third-party roundups in October 2026, and exam dates in 2028 are targets: AWS will probably replace some exams (for example SAA-C03) before then. Confirm each on the vendor's page and take the current version.
- Several details in this plan (CloudOps and Generative AI Developer exam codes and formats, Terraform and Google prices, free Skill Builder content) could not be confirmed from the vendor page and are marked "confirm".
- Never use exam dumps or braindump sites. They violate certification agreements and can get a credential revoked.
- Cloud services bill by the hour. NAT gateways, EKS control planes, load balancers and SageMaker endpoints are common sources of surprise bills. Use budget alarms and delete after every lab.
- Only test security tools against accounts you own.
- Certificates alone do not make a senior engineer. Keep building, break things on purpose and write about it.
