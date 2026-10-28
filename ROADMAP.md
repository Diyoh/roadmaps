# AWS Engineer: from zero to a remote job abroad

10 stages, about 1162 hours at 2 hours a day, from **2 Nov 2026** to **4 Jun 2028**. It starts with Linux and networking, then climbs one AWS certification at a time (eleven in all: Cloud Practitioner, Solutions Architect, Developer, CloudOps, Solutions Architect Professional, DevOps Engineer Professional, Security Specialty, AI Practitioner, Data Engineer, Machine Learning Engineer and Generative AI Developer Professional), plus Terraform. Every stage ships a public project built to impress recruiters, and the last stage turns the portfolio into a remote job paid to you in Cameroon. Every phase names a **free route** (US$0 of study cost) and, where it helps, a **paid route**. The only unavoidable cost is the exam fees.

It follows the format of the other roadmaps on the Roadmaps platform: stages, dated phases, exams, qualifications, community and a milestone checklist. The same content is in `public/index.html`.

## Be honest about "top ten in the world"

Nobody publishes a global ranking of AWS engineers, so no roadmap can promise a place in one. What can be measured is **rarity and proof**:

- Holding every generally available AWS certification at the same time is the requirement for the AWS Golden Jacket. One community source estimates fewer than 300 holders worldwide. It is awarded through partner, account-team or AWS-event routes, not an open application.
- The AWS list changes. The Advanced Networking Specialty is scheduled to retire on 31 December 2026, before this plan could reach it, and the Machine Learning Specialty stopped testing on 31 March 2026. This plan covers the eleven certifications that are reachable; check AWS's current list.
- Beyond the exams: ten public projects with real numbers, a streak of daily GitHub commits, posts and talks, and AWS Community Builders (then possibly Heroes). Together these make you one of the most employable AWS engineers anywhere. Whether that equals "top ten" depends on a ranking nobody keeps.

Also be honest about time: at 2 hours a day this is about 1.6 years. Certificates open interviews; projects, post-mortems and public write-ups prove you can do the work.

## The ten projects recruiters will remember

| # | Stage | Project | What it proves |
|---|---|---|---|
| 1 | 2 | Portfolio site on S3 and CloudFront, deployed from GitHub with no stored keys | Security habits, HTTPS, CI, cost awareness |
| 2 | 3 | Highly available three-tier app with a design document and DR runbook | Architecture and trade-offs |
| 3 | 4 | Serverless SaaS with tests, tracing, a payment sandbox and a cost model | Real product engineering |
| 4 | 5 | Three public Terraform modules with a CI pipeline | Reusable infrastructure as code |
| 5 | 6 | Multi-account landing zone and migration case study | Enterprise design |
| 6 | 7 | Container platform with canary releases, observability and DORA metrics | Delivery and reliability |
| 7 | 8 | Automated detection-and-response pipeline with a post-mortem | Security engineering |
| 8 | 9 | Data lake with Athena queries and a dashboard | Data engineering |
| 9 | 9 | RAG assistant with a measured evaluation | Generative AI that is tested honestly |
| 10 | 10 | FinOps case study with before and after numbers | Business value |

The flagship thread: a booking-and-payments app for small African businesses, rebuilt and improved in each stage. A real problem with a local angle is easier to explain and easier to remember.

## Daily posts, daily GitHub entries and the logbook

Every study day ends with the same three steps in the app's Daily log page:

1. **Log your hours and a note** about what you did.
2. **Make your progress card** (a 1080 x 1350 image) and post it with the generated caption (a long version for Instagram, LinkedIn and Facebook, and a short version under 280 characters for X and Threads). Add a link to the day's work and one lesson, and both captions update.
3. **Commit the daily work entry** (Markdown, generated for you) as `logbook/YYYY-MM-DD.md` in your `aws-journey` repo. A long green streak is public proof.

The **My logbook** panel downloads `LOGBOOK.md`: every logged day with hours and notes, the exams you passed, and empty tables for projects, scholarship and job applications, and posts or talks. Commit it weekly.

## What it costs (exam fees, as read in October 2026)

| Credential | Fee | Stage |
|---|---|---|
| AWS Cloud Practitioner (CLF-C02) | US$100 | 2 |
| AWS Solutions Architect – Associate (SAA-C03) | US$150 | 3 |
| AWS Developer – Associate (DVA-C02) | US$150 | 4 |
| Terraform Associate | about US$70 (confirm) | 5 |
| AWS CloudOps Engineer – Associate | about US$150 (confirm) | 5 |
| AWS Solutions Architect – Professional (SAP-C02) | US$300 | 6 |
| AWS DevOps Engineer – Professional (DOP-C02) | US$300 | 7 |
| AWS Security – Specialty (SCS-C03) | US$300 | 8 |
| AWS AI Practitioner (AIF-C01) | US$100 | 9 |
| AWS Data Engineer – Associate (DEA-C01) | US$150 | 9 |
| AWS ML Engineer – Associate (MLA-C01) | US$150 | 9 |
| AWS Generative AI Developer – Professional (AIP-C01) | US$300 (confirm) | 9 |

The AWS exams come to **US$2,150 before taxes and vouchers**, and about **US$2,220** with Terraform. Ways to cut it:

1. **Use the 50% voucher.** AWS gives a discount voucher after you pass an exam, valid for your next one.
2. **Ask a scholarship** (below), an employer or a school to pay. Ask before you pay.
3. **Space the exams out.** Stage 9 is the heaviest: four exams in 14 weeks.
4. **Stay inside the free tier for labs.** New AWS accounts get a free plan with up to US$200 in credits for up to six months, and about 30 always-free services continue afterwards. Delete resources after every lab and keep a budget alarm.

Request the free **ESL +30 minutes** accommodation in your AWS Certification account before your first exam if English is not your first language. Exams can be taken at a Pearson VUE test centre or online proctored.

## Scholarships and free training (read in October 2026; always confirm on the official page)

| Programme | What it offers | Dates and notes | Official page |
|---|---|---|---|
| Linux Foundation LiFT Scholarship | Free training courses and certification exams; about 500 winners a year, 16 categories | 2026 call closed 30 April 11:59 PM Pacific, winners told by 30 June. The page did not list eligible countries or which exams are covered; confirm the 2027 dates | [Linux Foundation](https://training.linuxfoundation.org/ja/blog/lift-scholarship-application-now-open-2026/) |
| AWS re/Start | Free 12-week training, stipend and an exam voucher | 2026 call was only for unemployed Ghanaian STEM graduates, so not open to Cameroon at present; check other countries | [AmaliTech](https://amalitech.com/aws-re-start-programme/) |
| Chevening (UK) | One-year master's, fully funded | 2027/28 intake: applications opened August 2026 and close in October 2026 (exact date depends on country), interviews March to April 2027. Expect the next cycle to open around August 2027. A guide read says it needs a good first degree, about two years of work experience and a commitment to return home, which conflicts with working abroad | [Chevening timeline](https://chevening.org/application-timeline) |
| Commonwealth Shared Scholarships (UK) | Master's, tuition, airfare, stipend | 2026/27 round: opened 10 November 2026, closes 8 December 2026 16:00 GMT. Cameroon was **not** on the eligible-country list when read; check CSC's other schemes | [CSC](https://cscuk.fcdo.gov.uk/scholarships/commonwealth-shared-scholarships) |
| DAAD (Germany) | Master's (development-related) and PhD; stipend about EUR 934 (master's) or EUR 1,200 (PhD) | Check each programme's deadline | [scholar.africa guide](https://scholar.africa/guides/scholarships-cameroonian-students) |
| Fulbright (USA) | Master's and PhD, tuition, living costs and airfare | Check the next cycle | [Fulbright](https://foreign.fulbrightonline.org) |
| Chinese Government (CSC) | Tuition, accommodation, stipend | Announced yearly through Cameroon's Ministry of Higher Education | [scholar.africa guide](https://scholar.africa/guides/scholarships-cameroonian-students) |
| Korea Foundation for Advanced Studies | Master's and PhD, tuition and living costs | Deadline 31 December 2026 | [KFAS](https://kfas.or.kr) |
| Mastercard Foundation Scholars | Leadership and need-based, through partner universities | Check partner universities | [scholar.africa guide](https://scholar.africa/guides/scholarships-cameroonian-students) |
| AWS Skill Builder | Free introductory and exam-prep content | Always available | [Skill Builder](https://skillbuilder.aws/) |

Degree scholarships help only if a master's fits your plan. Many ask for a first degree, references and original essays; copied or AI-written essays can disqualify you. Never pay anyone to "guarantee" a scholarship.

## Getting a remote job abroad from Cameroon

- **Where to apply:** remote-first companies, AWS Partner Network consultancies, managed-service and platform-engineering teams, contract marketplaces with their own vetting (Toptal, Arc, Turing, Andela and similar), freelance work, and community roles that lead to jobs.
- **Getting paid:** one source (Accrue's own guide, so promotional and unverified) listed Payoneer, Grey, Wise, PayPal, Skrill, Deel, Flutterwave and mobile-money withdrawals, with caveats: Payoneer has high fees and compliance checks, Wise may not be available to open an account in several African countries, PayPal receiving is limited in many, and bank wires are sometimes rejected. Open two routes, test with small amounts, keep invoices and see a local accountant about tax.
- **Travel:** remote work for a foreign company does not by itself give you the right to live abroad. Many countries offer digital-nomad visas with income thresholds and conditions that change; read official immigration pages and the rules for Cameroonian passport holders. Never pay anyone upfront for a visa job offer.

## The 10 stages

| Stage | Dates | Hours | Focus |
|---|---|---|---|
| 1. Foundations: Linux, networking, Git and Python | 2 Nov 2026 – 6 Dec 2026 | 70 | Become comfortable in a Linux terminal, understand how networks and the web work, use Git daily, and write small Python and Bash scripts. Open the logbook and the aws-journey repo that every later stage commits to. |
| 2. Cloud Practitioner: a safe account and your first site | 7 Dec 2026 – 10 Jan 2027 | 70 | Open and secure an AWS account, learn the core services and the shared responsibility model, publish your first live project, and pass AWS Certified Cloud Practitioner. |
| 3. Solutions Architect Associate: design real systems | 11 Jan 2027 – 7 Mar 2027 | 112 | Design secure, resilient and cost-aware architectures on AWS, ship a highly available three-tier application with a written design, and pass AWS Certified Solutions Architect Associate. |
| 4. Developer Associate: serverless products and first paid work | 8 Mar 2027 – 25 Apr 2027 | 98 | Build and operate a serverless application, pass AWS Certified Developer Associate, submit your first scholarship application and take your first paid or volunteer cloud job. |
| 5. CloudOps and Infrastructure as Code | 26 Apr 2027 – 13 Jun 2027 | 98 | Operate AWS environments with monitoring, automation and patching, write infrastructure as code that others reuse, and pass the Terraform Associate and AWS CloudOps Engineer Associate exams. |
| 6. Solutions Architect Professional: enterprise AWS | 14 Jun 2027 – 22 Aug 2027 | 140 | Design multi-account, hybrid and migration architectures at enterprise scale, publish a landing-zone project, and pass AWS Certified Solutions Architect Professional. |
| 7. DevOps Engineer Professional: containers and delivery | 23 Aug 2027 – 24 Oct 2027 | 126 | Run containers on AWS, deliver changes through automated pipelines with safe rollouts and observability, and pass AWS Certified DevOps Engineer Professional. |
| 8. Security Specialty: detect, respond and prove | 25 Oct 2027 – 19 Dec 2027 | 112 | Secure AWS environments end to end, build automated detection and response, and pass AWS Certified Security Specialty. Security-capable cloud engineers are hired first and paid best. |
| 9. Data and AI on AWS: lakes, ML and generative AI | 20 Dec 2027 – 26 Mar 2028 | 196 | Build data pipelines and generative-AI applications on AWS, pass the AI Practitioner, Data Engineer, Machine Learning Engineer and Generative AI Developer Professional exams, and publish a data-lake project and an AI assistant. |
| 10. Remote career launch and the elite audit | 27 Mar 2028 – 4 Jun 2028 | 140 | Turn your credentials and projects into a remote job abroad paid from Cameroon, set up payments, contracts and travel safely, publish a FinOps case study, and audit yourself against the rarest recognised achievements in AWS. |

## Stage 1: Foundations: Linux, networking, Git and Python

**2 Nov 2026 – 6 Dec 2026 · 70 hours.** Become comfortable in a Linux terminal, understand how networks and the web work, use Git daily, and write small Python and Bash scripts. Open the logbook and the aws-journey repo that every later stage commits to.

### 2 – 15 Nov

Day one: create the GitHub repo called aws-journey with a logbook folder, and make your first daily entry with the app’s Daily log page (Share today’s progress, then Download entry). From now on one commit a day goes into logbook/. Linux first. Free route: Linux Journey, the OverTheWire Bandit game and the Linux Foundation’s free Introduction to Linux (LFS101) course. Paid route: none needed. Use a free Ubuntu virtual machine or WSL. Learn files and permissions, users, processes, systemd, package managers, SSH keys and cron.

[Linux Journey](https://linuxjourney.com/) · [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) · [LFS101: Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/) · [The Missing Semester (MIT)](https://missing.csail.mit.edu/)

### 16 – 22 Nov

Networking that cloud work really uses. Free route: Professor Messer’s free networking videos. Learn IP addressing, CIDR subnetting by hand, DNS, TCP vs UDP, HTTP and TLS, NAT and firewalls. Practise with ping, traceroute, dig, curl and Wireshark. Subnetting is the most useful skill for the VPC work in Stage 3.

[Professor Messer free videos](https://www.professormesser.com/) · [Wireshark](https://www.wireshark.org/) · [Subnetting practice](https://subnetting.org/)

### 23 – 29 Nov

Git and GitHub, then Python. Free route: GitHub Skills courses, the Pro Git book and CS50P lectures 0–3. Branches, pull requests, merge conflicts, .gitignore, and a first GitHub Actions workflow. Write a Python script that calls a public API and a Bash backup script.

[GitHub Skills](https://skills.github.com/) · [Pro Git book](https://git-scm.com/book/en/v2) · [CS50P (Python)](https://cs50.harvard.edu/python/)

### 30 Nov – 6 Dec

Checkpoint week. Checkpoint 5 Dec 2026: serve a small website from your Linux VM, put it behind a firewall rule, back it up with your script, and push the code, a README and a 5-minute screen recording to aws-journey. Find a study partner or small group; you will review each other’s logbooks weekly.

[GitHub](https://github.com/) · [r/linuxadmin](https://www.reddit.com/r/linuxadmin/)

> Weekly rhythm in every stage: Monday and Tuesday learn, Wednesday and Thursday hands-on lab, Friday review and practice questions, Saturday build on your flagship project (or sit an exam), Sunday publish a short note on what broke and how you fixed it. Every study day ends with the same three steps in the app: log your hours, make the progress card, and commit the daily entry to GitHub. Cost in this stage: US$0.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 5 Dec 2026 | Checkpoint 1: a hardened Linux web server with a backup script | Free | Foundations checkpoint signed off by your mentor |

**You should hold:** Comfortable in a Linux terminal and SSH; Can subnet a network by hand; Public aws-journey repo with a daily logbook; Small Bash and Python scripts that work.

**Milestones**

- [ ] aws-journey repo created with a logbook folder
- [ ] First daily entry committed
- [ ] Linux VM running and snapshotted
- [ ] OverTheWire Bandit to level 15
- [ ] Can subnet a /24 into four networks without a calculator
- [ ] Checkpoint 1 signed off

## Stage 2: Cloud Practitioner: a safe account and your first site

**7 Dec 2026 – 10 Jan 2027 · 70 hours.** Open and secure an AWS account, learn the core services and the shared responsibility model, publish your first live project, and pass AWS Certified Cloud Practitioner.

### 7 – 13 Dec

Open your AWS account safely before anything else. Free route: a new AWS account gets a free plan with up to US$200 in credits (US$100 at sign-up, more for using services) for up to six months, and about 30 always-free services continue afterwards. Turn on MFA for the root user, create an admin identity, stop using root, and set a budget alert at US$1. Never put access keys in code or Git. Build a professional profile now: a LinkedIn profile with a clear headline and a GitHub profile README linking to aws-journey.

[AWS Free Tier](https://aws.amazon.com/free/) · [AWS Skill Builder](https://skillbuilder.aws/) · [AWS Billing and Cost Management](https://aws.amazon.com/aws-cost-management/)

### 14 – 27 Dec

Learn the services. Free route: AWS Skill Builder’s free Cloud Practitioner Essentials and exam-prep courses, plus freeCodeCamp’s free full course (check it covers CLF-C02). Paid route: one video course (about US$15–20 on sale). Cover regions and availability zones, IAM, EC2, S3, VPC basics, RDS, Lambda, CloudFront, CloudWatch, pricing and the shared responsibility model. One small lab per service; delete it afterwards.

[AWS Cloud Practitioner exam page](https://aws.amazon.com/certification/certified-cloud-practitioner/) · [freeCodeCamp on YouTube](https://www.youtube.com/@freecodecamp) · [AWS Workshops](https://workshops.aws/)

### 28 Dec – 3 Jan

Project 1: the portfolio site. Build your personal site on S3 with CloudFront, a custom domain with HTTPS (Route 53 and ACM), and deploy it from GitHub Actions using OpenID Connect, so no access keys exist anywhere. Write the cost: a good result is under US$1 a month. Exam practice in parallel: free official practice questions, then every wrong answer written up in your own words. If English is not your first language, request the free ESL +30 minutes accommodation in your AWS Certification account before booking.

[AWS Certification account](https://aws.amazon.com/certification/) · [GitHub Actions with AWS (OIDC)](https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

### 4 – 10 Jan

Sit the exam. Exam: 9 Jan 2027 (65 questions, about 90 minutes, pass at 700 out of 1000; confirm on the exam page). Pass and claim your 50% discount voucher for the next exam from your certification account, share the Credly badge, and post what you built. Scholarship research week: read the programme list in the Stage 4 notes and put the dates in your calendar.

[Credly](https://www.credly.com/) · [AWS Certification benefits](https://aws.amazon.com/certification/benefits/)

> Money in this stage: the exam is about US$100 plus any local tax. Study material at US$0 on the free route; the optional paid route adds US$15–35. Flagship project, version 1: a booking-and-payments app for small African businesses (salons, clinics, tutors) that you will rebuild and improve in every stage. Recruiters remember a real problem solved for real people, so pick a business you know. This stage’s result is the live portfolio site.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 9 Jan 2027 | [AWS Certified Cloud Practitioner (CLF-C02)](https://aws.amazon.com/certification/certified-cloud-practitioner/) | US$100 plus tax | AWS Certified Cloud Practitioner (valid 3 years) and a Credly badge |

**You should hold:** AWS Certified Cloud Practitioner; A secured AWS account with MFA and a budget alert; A live portfolio site on S3 and CloudFront deployed with no stored keys.

**Milestones**

- [ ] AWS account secured: MFA, budget alert, no root use
- [ ] LinkedIn and GitHub profile README set up
- [ ] One lab per core service completed and cleaned up
- [ ] Project 1: portfolio site live behind CloudFront with HTTPS
- [ ] Cloud Practitioner exam passed
- [ ] 50% voucher claimed

## Stage 3: Solutions Architect Associate: design real systems

**11 Jan 2027 – 7 Mar 2027 · 112 hours.** Design secure, resilient and cost-aware architectures on AWS, ship a highly available three-tier application with a written design, and pass AWS Certified Solutions Architect Associate.

### 11 – 24 Jan

Networking and compute. Free route: AWS Skill Builder’s free exam-prep content plus AWS Workshops. Paid route: one full video course with labs (about US$20–45 on sale). Build a VPC from scratch: public and private subnets, route tables, an internet gateway, a NAT gateway, security groups vs network ACLs. Then EC2 (types, pricing, Auto Scaling) and Elastic Load Balancing. Delete NAT gateways after labs: they bill every hour.

[SAA-C03 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-associate/) · [AWS Workshops](https://workshops.aws/) · [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### 25 Jan – 7 Feb

Storage, databases and identity. S3 (classes, lifecycle, replication, encryption, bucket policies), EBS and EFS, RDS and Aurora (Multi-AZ, read replicas), DynamoDB keys and indexes, ElastiCache. IAM in depth: policies, roles, trust policies, permission boundaries, SCPs and how a request is evaluated. Lab: lock down an S3 bucket and prove one role can read it while another cannot.

[AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/) · [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/) · [S3 documentation](https://docs.aws.amazon.com/s3/)

### 8 – 21 Feb

Resilience, decoupling and cost. Route 53 routing policies, CloudFront, SQS, SNS, EventBridge, Lambda and API Gateway, disaster-recovery patterns (backup and restore, pilot light, warm standby, active-active) and cost tools. Project 2: move the flagship app into web, app and database tiers across two availability zones (load balancer, Auto Scaling group, RDS Multi-AZ), with a design document, a diagram, a Well-Architected review of your own design, a monthly cost estimate and a disaster-recovery runbook. This document is what interviewers ask about.

[Route 53 documentation](https://docs.aws.amazon.com/route53/) · [AWS Architecture Center](https://aws.amazon.com/architecture/) · [AWS Pricing Calculator](https://calculator.aws/)

### 22 Feb – 7 Mar

Practice and exam. Official practice questions (free), then third-party practice exams (about US$15) until you score 85% repeatedly, reading every explanation. Book three weeks ahead; use your 50% voucher. Exam 6 Mar 2027 (65 questions, about 130 minutes, pass at 720 out of 1000). Scholarship preparation: gather your degree certificate and transcripts, choose two referees, and write the first draft of your story (what you will build, why Cameroon, what you will give back).

[AWS Skill Builder](https://skillbuilder.aws/) · [Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this stage: the exam is about US$150 (US$75 with a voucher). Keep lab spend near zero: delete NAT gateways, load balancers and RDS instances at the end of every lab and check Cost Explorer every Friday. Never use exam dumps.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 6 Mar 2027 | [AWS Certified Solutions Architect – Associate (SAA-C03)](https://aws.amazon.com/certification/certified-solutions-architect-associate/) | US$150 plus tax | AWS Certified Solutions Architect – Associate (valid 3 years) and a Credly badge |

**You should hold:** AWS Certified Solutions Architect – Associate; A highly available three-tier app with a design document and DR runbook; Documents ready for scholarship applications.

**Milestones**

- [ ] VPC built from scratch and subnetted by hand
- [ ] S3 and IAM access test written up
- [ ] Project 2: three-tier app across two availability zones
- [ ] Design document, diagram and cost estimate published
- [ ] Disaster-recovery runbook written and tested
- [ ] Solutions Architect Associate exam passed

## Stage 4: Developer Associate: serverless products and first paid work

**8 Mar 2027 – 25 Apr 2027 · 98 hours.** Build and operate a serverless application, pass AWS Certified Developer Associate, submit your first scholarship application and take your first paid or volunteer cloud job.

### 8 – 28 Mar

Serverless foundations. Free route: AWS Skill Builder’s free serverless content, Serverless Land patterns and AWS Workshops. Lambda (concurrency, layers, event sources), API Gateway, DynamoDB design, Cognito for sign-in, SQS, SNS, EventBridge, Step Functions and S3 events. Use Python or JavaScript, with the AWS SAM or CDK tooling and the AWS CLI.

[Serverless Land](https://serverlessland.com/) · [DVA-C02 exam page](https://aws.amazon.com/certification/certified-developer-associate/) · [AWS SAM](https://aws.amazon.com/serverless/sam/)

### 29 Mar – 11 Apr

Project 3: flagship v3, a serverless SaaS. Rebuild the booking-and-payments app with API Gateway, Lambda, DynamoDB and Cognito, a mobile-money payment webhook (use the sandbox of a payment provider such as Flutterwave, Paystack or the provider’s own test mode; no real money), event-driven reminders with EventBridge and SQS, automated tests, structured logs, X-Ray tracing and a cost model per 1,000 bookings. Publish it as a template repo with a one-command deploy. Also learn CI/CD basics with CodeBuild or GitHub Actions.

[AWS X-Ray](https://aws.amazon.com/xray/) · [Flutterwave developer docs](https://developer.flutterwave.com/) · [AWS CDK](https://aws.amazon.com/cdk/)

### 12 – 18 Apr

Scholarship week. Free route to a Linux Foundation certification: the Linux Foundation Training (LiFT) Scholarship. Its 2026 call covered free training and certification exams for about 500 winners a year, in 16 categories (open source beginners, university students, women in open source, sysadmins, cloud, networking, cybersecurity and more), with applications closing 30 April at 11:59 PM Pacific and winners told by 30 June. The page did not list eligible countries or which exams are covered, so confirm both and the 2027 dates on the Linux Foundation site. Write original answers: copied or AI-written answers can lower your score and disqualify you. Submit by the deadline.

[Linux Foundation LiFT scholarship](https://training.linuxfoundation.org/ja/blog/lift-scholarship-application-now-open-2026/) · [Linux Foundation Training](https://training.linuxfoundation.org/)

### 19 – 25 Apr

Exam week. Official practice questions, then third-party practice until you reach 85%. Exam 24 Apr 2027 (65 questions, about 130 minutes, pass at 720 out of 1000; confirm). Start applying for first paid work: junior cloud support, freelance infrastructure fixes for local businesses, AWS-partner internships, open-source issues labelled good first issue. Record every application in the logbook tables.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Upwork](https://www.upwork.com/) · [GitHub good first issues](https://github.com/topics/good-first-issue)

> Money in this stage: the exam is about US$150 (US$75 with a voucher). Other scholarships worth knowing about (read each official page before applying; none of this is a promise): AWS re/Start was offered in 2026 only to unemployed Ghanaian STEM graduates, so it does not cover Cameroon at present, but check AWS re/Start for other countries; Skill Builder remains free for most introductory content. Do the free route in full before paying for anything.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 24 Apr 2027 | [AWS Certified Developer – Associate (DVA-C02)](https://aws.amazon.com/certification/certified-developer-associate/) | US$150 plus tax | AWS Certified Developer – Associate (valid 3 years) and a Credly badge |

**You should hold:** AWS Certified Developer – Associate; A deployed serverless SaaS with tests, tracing and a cost model; A submitted LiFT (or equivalent) scholarship application; First paid, freelance or open-source cloud contribution.

**Milestones**

- [ ] Serverless lab series completed
- [ ] Project 3: serverless SaaS template repo published
- [ ] Payment webhook working in a provider sandbox
- [ ] Cost per 1,000 bookings calculated
- [ ] LiFT scholarship application submitted
- [ ] Developer Associate exam passed
- [ ] First 10 job or freelance applications logged

## Stage 5: CloudOps and Infrastructure as Code

**26 Apr 2027 – 13 Jun 2027 · 98 hours.** Operate AWS environments with monitoring, automation and patching, write infrastructure as code that others reuse, and pass the Terraform Associate and AWS CloudOps Engineer Associate exams.

### 26 Apr – 9 May

Operations. CloudWatch metrics, logs, alarms and dashboards, Systems Manager (Session Manager, Patch Manager, Automation), AWS Config, Backup, Health events, and troubleshooting networking with VPC Flow Logs and Reachability Analyzer. Free route: Skill Builder and AWS Workshops.

[AWS Workshops](https://workshops.aws/) · [CloudWatch documentation](https://docs.aws.amazon.com/cloudwatch/) · [Systems Manager documentation](https://docs.aws.amazon.com/systems-manager/)

### 10 – 30 May

Infrastructure as code. Free route: HashiCorp’s free Terraform tutorials, the AWS provider docs and the AWS CloudFormation documentation. Write Terraform for the whole flagship app: modules, variables, remote state in S3 with locking, workspaces, and policy checks with tools such as Checkov. Sit 29 May 2027 (about 1 hour; confirm price and format). Project 4: publish three reusable Terraform modules (VPC, container or Lambda service, database) with README, examples, tests and a GitHub Actions pipeline that plans on pull requests and applies on merge. Public modules show recruiters you write code others can use.

[Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) · [Terraform AWS provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs) · [Checkov](https://www.checkov.io/) · [Terraform Associate](https://developer.hashicorp.com/certifications/infrastructure-automation)

### 31 May – 6 Jun

Reliability and incident practice. Write an SLO for the flagship app, build the alarms and a runbook, then run a game day: break something on purpose and write a blameless post-mortem. Post-mortems are the content engineers share most.

[Google SRE book (free)](https://sre.google/sre-book/table-of-contents/) · [AWS Fault Injection Service](https://aws.amazon.com/fis/)

### 7 – 13 Jun

Exam week. Exam 12 Jun 2027: AWS Certified CloudOps Engineer Associate, the successor to SysOps Administrator (exam code, length and format changed, so confirm all of it on the AWS exam page). Practice questions first; target 85%. Update your LinkedIn with Project 3 and Project 4.

[AWS Certification](https://aws.amazon.com/certification/) · [Tutorials Dojo](https://tutorialsdojo.com/)

> Money in this stage: Terraform Associate about US$70 (confirm), CloudOps Associate about US$150 (US$75 with a voucher; confirm). Terraform runs against your own AWS account, so keep a budget alarm on and run terraform destroy after every lab.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 29 May 2027 | [HashiCorp Certified: Terraform Associate](https://developer.hashicorp.com/certifications/infrastructure-automation) | About US$70 (confirm) | HashiCorp Certified: Terraform Associate |
| 12 Jun 2027 | [AWS Certified CloudOps Engineer – Associate](https://aws.amazon.com/certification/) | About US$150 plus tax (confirm) | AWS Certified CloudOps Engineer – Associate (valid 3 years) |

**You should hold:** HashiCorp Certified: Terraform Associate; AWS Certified CloudOps Engineer – Associate; Three public Terraform modules with a pipeline; A published blameless post-mortem.

**Milestones**

- [ ] Whole flagship app described in Terraform
- [ ] Remote state with locking working
- [ ] Project 4: three public Terraform modules with CI
- [ ] SLO, alarms and runbook written
- [ ] Game day run and post-mortem published
- [ ] Terraform Associate passed
- [ ] CloudOps Associate passed

## Stage 6: Solutions Architect Professional: enterprise AWS

**14 Jun 2027 – 22 Aug 2027 · 140 hours.** Design multi-account, hybrid and migration architectures at enterprise scale, publish a landing-zone project, and pass AWS Certified Solutions Architect Professional.

### 14 Jun – 4 Jul

Multi-account foundations. AWS Organizations, Control Tower, IAM Identity Center, service control policies, centralised CloudTrail and logging, tagging, cost allocation and budgets across accounts. Free route: Skill Builder professional exam-prep content and AWS Workshops. Build a three-account landing zone in your own organisation: management, logging and workload accounts.

[SAP-C02 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-professional/) · [AWS Control Tower](https://aws.amazon.com/controltower/) · [AWS Organizations](https://aws.amazon.com/organizations/)

### 5 – 25 Jul

Networking at scale and hybrid. Transit Gateway, PrivateLink, VPC peering vs sharing, Direct Connect and Site-to-Site VPN, Route 53 Resolver, hybrid DNS. Migration: the 6 Rs, Application Discovery, Migration Hub, Database Migration Service and DataSync. Project 5: a landing-zone and migration case study. Document your organisation structure, guardrails (SCPs), a shared-services network and a migration plan for a fictional company with a data centre, including risks and costs. Publish it as a repo with diagrams and a 10-minute video.

[Transit Gateway](https://aws.amazon.com/transit-gateway/) · [AWS Prescriptive Guidance](https://aws.amazon.com/prescriptive-guidance/) · [Database Migration Service](https://aws.amazon.com/dms/)

### 26 Jul – 8 Aug

Resilience, performance, cost and security trade-offs at scale. Multi-region designs, Aurora Global Database, DynamoDB global tables, S3 replication, cost optimisation with Savings Plans and rightsizing, and designing for compliance. Practise the Professional question style: long scenarios where several answers work and one fits best.

[AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/) · [AWS Whitepapers](https://aws.amazon.com/whitepapers/)

### 9 – 22 Aug

Practice and exam. Third-party professional practice exams (US$15–25), reading every explanation, targeting 80–85% repeatedly. Exam 21 Aug 2027 (75 questions, about 180 minutes, pass at 750 out of 1000). Your Professional pass renews the Associate. Use your voucher. Start serious job hunting this month (see the Stage 10 playbook): your CV now has two Associates, a Professional and four public projects.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this stage: the exam is US$300 (US$150 with a voucher). The Professional exam is long; request the free ESL +30 minutes accommodation if it applies, and consider online proctoring only with a stable connection and a backup power plan, since a dropped session can end the attempt.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 21 Aug 2027 | [AWS Certified Solutions Architect – Professional (SAP-C02)](https://aws.amazon.com/certification/certified-solutions-architect-professional/) | US$300 plus tax | AWS Certified Solutions Architect – Professional (valid 3 years; also renews the Associate) |

**You should hold:** AWS Certified Solutions Architect – Professional; A published landing-zone and migration case study; Multi-account Organizations with SCP guardrails in your own lab.

**Milestones**

- [ ] Three-account landing zone built
- [ ] Transit Gateway and hybrid DNS lab completed
- [ ] Project 5: landing-zone and migration case study published
- [ ] Multi-region design written up
- [ ] Professional practice scores 80–85% three times
- [ ] Solutions Architect Professional exam passed

## Stage 7: DevOps Engineer Professional: containers and delivery

**23 Aug 2027 – 24 Oct 2027 · 126 hours.** Run containers on AWS, deliver changes through automated pipelines with safe rollouts and observability, and pass AWS Certified DevOps Engineer Professional.

### 23 Aug – 12 Sep

Containers. Docker properly, then Amazon ECS on Fargate and EKS. Image scanning with Amazon ECR, task roles, service discovery, load balancing and autoscaling. Free route: Docker’s official tutorials, Kubernetes Basics and AWS Workshops (EKS and ECS). EKS control planes cost money every hour; delete clusters after each lab.

[DOP-C02 exam guide](https://aws.amazon.com/certification/certified-devops-engineer-professional/) · [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) · [EKS Workshop](https://www.eksworkshop.com/) · [Docker docs](https://docs.docker.com/)

### 13 Sep – 3 Oct

Delivery pipelines. CodePipeline, CodeBuild, CodeDeploy and GitHub Actions, blue/green and canary deployments, feature flags, automatic rollback on alarms, secrets with Secrets Manager and Parameter Store, and supply-chain security (signed images, SBOMs). Project 6: a container platform for the flagship app. Run it on ECS Fargate or EKS, deploy with GitOps (Argo CD or Flux) or CodePipeline, roll out with canary or blue/green, add observability (CloudWatch, Prometheus and Grafana, or OpenTelemetry) and track the four DORA metrics. Publish the repo, diagrams, and the real numbers.

[Argo CD](https://argo-cd.readthedocs.io/) · [OpenTelemetry](https://opentelemetry.io/) · [DORA metrics](https://dora.dev/)

### 4 – 10 Oct

Reliability and incident response. Write alarms that wake you for the right reasons, practise a game day with AWS Fault Injection Service, and publish a post-mortem. Send your first conference or user-group talk proposal: ‘How I cut deploy time from X to Y’ with real data is a good title.

[AWS Fault Injection Service](https://aws.amazon.com/fis/) · [Sessionize (call for papers)](https://sessionize.com/)

### 11 – 24 Oct

Practice and exam. Professional-level practice exams, aiming for 80–85%. Exam 23 Oct 2027 (75 questions, about 180 minutes, pass at 750 out of 1000). Update CV, LinkedIn and the portfolio page with the container platform. If the Chevening intake that opens each August is relevant to you, this is its window: see the note.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this stage: the exam is US$300 (US$150 with a voucher). Scholarship timing: the 2027–28 Chevening cycle opened in August 2026 and closed in October 2026; for the 2028–29 intake expect applications to open around August 2027, but confirm on chevening.org. Chevening is a one-year UK master’s scholarship; per the guide read, it asks for a good first degree, about two years of work experience and a commitment to return to your home country afterwards, which conflicts with a plan to work abroad long-term, so decide honestly whether it fits. The Commonwealth Shared Scholarship page listed eligible countries and Cameroon was not on that list when read; check the CSC’s other schemes.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 23 Oct 2027 | [AWS Certified DevOps Engineer – Professional (DOP-C02)](https://aws.amazon.com/certification/certified-devops-engineer-professional/) | US$300 plus tax | AWS Certified DevOps Engineer – Professional (valid 3 years) |

**You should hold:** AWS Certified DevOps Engineer – Professional; A container platform with canary rollouts, observability and DORA metrics; A talk proposal submitted.

**Milestones**

- [ ] Docker and ECS Fargate lab series completed
- [ ] EKS cluster built and deleted after use
- [ ] Project 6: container platform with GitOps or pipeline rollout
- [ ] Canary or blue/green rollout shown with metrics
- [ ] DORA metrics published
- [ ] Talk proposal submitted
- [ ] DevOps Engineer Professional exam passed

## Stage 8: Security Specialty: detect, respond and prove

**25 Oct 2027 – 19 Dec 2027 · 112 hours.** Secure AWS environments end to end, build automated detection and response, and pass AWS Certified Security Specialty. Security-capable cloud engineers are hired first and paid best.

### 25 Oct – 14 Nov

Identity, data protection and logging. IAM Access Analyzer, KMS and envelope encryption, Secrets Manager, ACM, S3 security, VPC security, WAF and Shield, CloudTrail, Config and CloudTrail Lake. Free route: Skill Builder and AWS Workshops (security). Test only accounts you own.

[SCS-C03 exam guide](https://aws.amazon.com/certification/certified-security-specialty/) · [AWS Security Workshops](https://workshops.aws/) · [AWS Security Blog](https://aws.amazon.com/blogs/security/)

### 15 Nov – 5 Dec

Detection and response. GuardDuty, Security Hub, Inspector, Macie, Detective, EventBridge and Lambda for automated remediation, and forensic snapshots. Project 7: a detection-and-response pipeline. Enable the services in your three-account landing zone, write a threat model, generate safe test findings (for example GuardDuty sample findings), auto-remediate three findings (public bucket, exposed key, open security group) and publish an incident post-mortem and a compliance mapping against a framework such as CIS or NIST.

[GuardDuty](https://aws.amazon.com/guardduty/) · [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) · [Security Hub](https://aws.amazon.com/security-hub/)

### 6 – 19 Dec

Practice and exam. Specialty practice exams until you hit 80–85%. Exam 18 Dec 2027 (65 questions, about 170 minutes, pass at 750 out of 1000; confirm). Publish a plain-language security checklist for small businesses in Cameroon and Africa; it earns visibility and teaches you to explain risk to non-engineers.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this stage: the exam is US$300 (US$150 with a voucher). Only run offensive tests, scanners and sample findings against accounts and systems you own. Never put real credentials in screenshots; scrub every post.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 18 Dec 2027 | [AWS Certified Security – Specialty (SCS-C03)](https://aws.amazon.com/certification/certified-security-specialty/) | US$300 plus tax | AWS Certified Security – Specialty (valid 3 years) |

**You should hold:** AWS Certified Security – Specialty; An automated detection-and-response pipeline with a post-mortem; A small-business security checklist published.

**Milestones**

- [ ] KMS and encryption lab series completed
- [ ] Security Hub and GuardDuty enabled across accounts
- [ ] Project 7: three auto-remediations working
- [ ] Threat model and compliance mapping published
- [ ] Incident post-mortem published
- [ ] Security Specialty exam passed

## Stage 9: Data and AI on AWS: lakes, ML and generative AI

**20 Dec 2027 – 26 Mar 2028 · 196 hours.** Build data pipelines and generative-AI applications on AWS, pass the AI Practitioner, Data Engineer, Machine Learning Engineer and Generative AI Developer Professional exams, and publish a data-lake project and an AI assistant.

### 20 Dec – 9 Jan

AI foundations. Free route: AWS Skill Builder’s AI Practitioner exam prep. Learn what foundation models, prompts, embeddings and RAG are, responsible AI, and Amazon Bedrock and SageMaker at a high level. Exam 8 Jan 2028 at the end of week 3, avoiding New Year’s Day (confirm format).

[AI Practitioner exam](https://aws.amazon.com/certification/certified-ai-practitioner/) · [Amazon Bedrock](https://aws.amazon.com/bedrock/)

### 10 Jan – 6 Feb

Data engineering. S3 data lakes, Glue ETL and the Data Catalog, Athena, Lake Formation, Kinesis and MSK streaming, Redshift, orchestration with Step Functions or MWAA. Project 8: a data lake for the flagship app. Ingest booking and payment events, clean them, query them with Athena, secure them with Lake Formation, and build a dashboard of business metrics with QuickSight or an open-source tool. Include cost per GB and data quality checks. Exam 5 Feb 2028 at the end of week 7.

[Data Engineer exam](https://aws.amazon.com/certification/certified-data-engineer-associate/) · [AWS Glue](https://aws.amazon.com/glue/) · [Amazon Athena](https://aws.amazon.com/athena/)

### 7 Feb – 5 Mar

Machine learning engineering. SageMaker pipelines, training and tuning, deployment patterns and endpoints, drift monitoring, and MLOps. SageMaker endpoints bill by the hour, so delete them. Exam 4 Mar 2028 at the end of week 11.

[ML Engineer exam](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/) · [Amazon SageMaker](https://aws.amazon.com/sagemaker/)

### 6 – 26 Mar

Generative AI. Project 9: a RAG assistant. Build an assistant that answers questions about a small business’s policies and bookings with Bedrock, a knowledge base over your documents, guardrails, an evaluation set with measured accuracy, prompt-injection tests, and a cost-per-answer table. Publish a demo video and a write-up of what the evaluation showed, including failures. Exam 25 Mar 2028: AWS Certified Generative AI Developer Professional at the end of week 14 (exam details were not confirmed; check the exam page).

[Bedrock Knowledge Bases](https://aws.amazon.com/bedrock/knowledge-bases/) · [Bedrock Guardrails](https://aws.amazon.com/bedrock/guardrails/) · [AWS Certification](https://aws.amazon.com/certification/)

> Money in this stage: AI Practitioner US$100, Data Engineer and Machine Learning Engineer US$150 each, Generative AI Developer Professional US$300 (confirm), about US$700 in total before vouchers, so space them and use vouchers. Bedrock model calls, OpenSearch Serverless and SageMaker endpoints can bill quickly; set budget alarms and delete after each lab. This is the heaviest stage: four exams in 14 weeks.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 8 Jan 2028 | [AWS Certified AI Practitioner (AIF-C01)](https://aws.amazon.com/certification/certified-ai-practitioner/) | US$100 plus tax | AWS Certified AI Practitioner (valid 3 years) |
| 5 Feb 2028 | [AWS Certified Data Engineer – Associate (DEA-C01)](https://aws.amazon.com/certification/certified-data-engineer-associate/) | US$150 plus tax | AWS Certified Data Engineer – Associate (valid 3 years) |
| 4 Mar 2028 | [AWS Certified Machine Learning Engineer – Associate (MLA-C01)](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/) | US$150 plus tax | AWS Certified Machine Learning Engineer – Associate (valid 3 years) |
| 25 Mar 2028 | [AWS Certified Generative AI Developer – Professional (AIP-C01)](https://aws.amazon.com/certification/) | US$300 plus tax (confirm) | AWS Certified Generative AI Developer – Professional (valid 3 years) |

**You should hold:** AWS Certified AI Practitioner; AWS Certified Data Engineer – Associate; AWS Certified Machine Learning Engineer – Associate; AWS Certified Generative AI Developer – Professional; A data lake and a measured RAG assistant, both public.

**Milestones**

- [ ] AI Practitioner passed
- [ ] Project 8: data lake with Athena queries and dashboard
- [ ] Data Engineer Associate passed
- [ ] SageMaker pipeline built and endpoint deleted
- [ ] ML Engineer Associate passed
- [ ] Project 9: RAG assistant with evaluation results published
- [ ] Generative AI Developer Professional passed

## Stage 10: Remote career launch and the elite audit

**27 Mar 2028 – 4 Jun 2028 · 140 hours.** Turn your credentials and projects into a remote job abroad paid from Cameroon, set up payments, contracts and travel safely, publish a FinOps case study, and audit yourself against the rarest recognised achievements in AWS.

### 27 Mar – 9 Apr

Portfolio and profile. One page that lists every credential with its Credly link, nine projects with diagrams, costs and post-mortems, your talk or posts, and your logbook streak. Rewrite your CV in the achievement style: ‘cut monthly cost from US$X to US$Y’, ‘reduced deploy time by Z%’. Use the app’s Download LOGBOOK.md as proof of consistency. Request a recommendation from your mentor and study partners on LinkedIn. Project 10: a FinOps case study. Take a real (with permission) or simulated bill, find waste with Cost Explorer, Compute Optimizer and the Cost and Usage Report, and publish the before and after numbers.

[AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) · [FinOps Foundation](https://www.finops.org/) · [Credly](https://www.credly.com/)

### 10 Apr – 7 May

The remote-job playbook. Routes that hire from Africa: remote-first companies and AWS Partner Network consultancies; managed-service and platform-engineering teams; contract marketplaces (Toptal, Arc, Turing, Andela and similar, each with its own vetting); freelance work on Upwork; and open-source or community roles that lead to jobs. Apply to 10 targeted roles a week, with a short note that links one relevant project. Prepare for the usual loop: a recruiter screen, a hands-on or whiteboard design round, a troubleshooting round, and a behavioural round. Practise by designing the flagship app out loud and by explaining one of your post-mortems in five minutes. Do three mock interviews with your mentor or study group.

[We Work Remotely](https://weworkremotely.com/) · [Wellfound](https://wellfound.com/) · [Arc](https://arc.dev/) · [AWS Partner Network](https://aws.amazon.com/partners/)

### 8 – 21 May

Getting paid in Cameroon, safely. One source read (Accrue’s own guide, so it is promotional and unverified) described these routes: Payoneer (USD account, withdraw to a local bank; high fees, frequent compliance checks, 3–7 business days), Grey (virtual USD, GBP and EUR accounts), Wise (transparent fees but not available for account opening in several African countries, so check Cameroon first), PayPal (not fully supported for receiving in many African countries), Skrill, Deel (mainly for companies and agencies), Flutterwave and mobile-money withdrawals. Bank wires are sometimes rejected. Before accepting a contract: open two payment routes, test each with a small amount, keep invoices, ask the client who pays transfer fees, and ask whether they use an employer-of-record service so you are properly engaged. Taxes: foreign income is still income; see a local accountant about what to declare and keep every invoice and bank record.

[Payoneer](https://www.payoneer.com/) · [Wise](https://wise.com/) · [Deel](https://www.deel.com/) · [Accrue guide for Cameroon](https://blog.useaccrue.com/how-freelancers-in-cameroon-can-receive-payments-abroad/)

### 22 – 28 May

Travel while you work. Working remotely for a company abroad does not by itself give you the right to live in another country. Many countries offer digital-nomad or remote-worker visas, each with its own income threshold, tax rules and nationality conditions, and these change often (a search found several lists but no figures I could verify). Pick two or three countries, read their official immigration pages, check the visa rules for Cameroonian passport holders, and plan one short trip as a test before relocating. Never accept a job or pay a fee for a visa from anyone who asks for money upfront.

[Google: official immigration pages for your target country](https://www.google.com/search?q=digital+nomad+visa+official+immigration+site) · [Cameroon travel advice (UK Government)](https://www.gov.uk/foreign-travel-advice/cameroon)

### 29 May – 4 Jun

The elite audit. Check every credential and project against the list below, apply to the AWS Community Builders programme (check the current application window at the AWS Builder Center), submit a talk to a user group or conference, and write your 12-month plan for the rarest achievements. Mentor review: 3 Jun 2028.

[AWS Community Builders](https://builder.aws.com/community/community-builders) · [AWS Heroes](https://aws.amazon.com/developer/community/heroes/) · [Credly](https://www.credly.com/)

> About ‘top ten in the world’: no organisation publishes a global ranking of AWS engineers, so nobody can promise you a place in one. What can be measured is rarity and proof. Holding every generally available AWS certification at the same time is the requirement for the AWS Golden Jacket; a community estimate puts holders at fewer than 300 worldwide, and it is awarded through partner, account-team or AWS-event routes, not an open application. This plan takes you through every AWS certification that can still be reached when it runs: the Advanced Networking Specialty is scheduled to retire on 31 December 2026 and the Machine Learning Specialty has retired, so confirm AWS’s current list. After that come public proof (nine to ten projects with real numbers), community recognition (Community Builders, then possibly Heroes), and a paid remote job. That combination is what makes a person hirable anywhere.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 3 Jun 2028 | Checkpoint 10: the elite audit, portfolio and mock interview review | Free | Capstone signed off by your mentor |

**You should hold:** A portfolio page with every credential and project; A CV in achievement style and three mock interviews done; Two payment routes tested; A published FinOps case study; A 12-month plan for the rarest remaining credentials.

**Milestones**

- [ ] Portfolio page live
- [ ] Project 10: FinOps case study published
- [ ] CV rewritten in achievement style
- [ ] Ten applications a week for four weeks logged
- [ ] Three mock interviews completed
- [ ] Two payment routes opened and tested with small amounts
- [ ] Visa options researched for two countries
- [ ] Applied to AWS Community Builders
- [ ] Elite audit completed and signed off

## Honest limits

- Exam codes, prices, lengths and retirement dates change. They were read from AWS pages and third-party roundups in October 2026, and exam dates in 2028 are targets: AWS will probably replace some exams (for example SAA-C03) before then. Confirm each on the vendor's page and take the current version.
- The CloudOps and Generative AI Developer exam codes and formats, the Terraform price, scholarship eligibility for Cameroon and all 2027 scholarship dates could not be confirmed and are marked "confirm".
- The payments and travel notes come from one promotional guide and general search results. Treat them as a checklist of questions to verify, not as advice. This roadmap is not legal, tax or immigration advice.
- Never use exam dumps. They violate certification agreements and can get a credential revoked.
- Cloud services bill by the hour. NAT gateways, EKS control planes, load balancers, Bedrock calls and SageMaker endpoints are common sources of surprise bills. Use budget alarms and delete after every lab.
- Only test security tools against accounts you own, and scrub credentials from every screenshot and post.
- Certificates alone do not make a senior engineer. Keep building, break things on purpose and write about it.
