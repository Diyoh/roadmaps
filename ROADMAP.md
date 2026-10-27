# DevOps Engineer: a certification-and-capstone roadmap

10 levels, about 1148 hours at 2 hours a day, from **2 Nov 2026** to **28 May 2028**. It starts with Linux, networking and Git, then builds the whole delivery chain on one real application: CI/CD with GitHub Actions and Docker, AWS, Terraform and Ansible, Kubernetes, GitOps and platform engineering, observability and SRE, DevSecOps, and a professional cloud DevOps exam. It ends with a portfolio and job applications. Every phase names a **free route** (US$0 of study cost) and, where it helps, a **paid route**. The only unavoidable cost is exam fees.

It follows the format of the DBA Career Ladder, AI Engineer and Cloud Computing roadmaps on the Roadmaps platform: levels, dated phases, exams, qualifications, community and a milestone checklist. The same content is in `public/index.html`.

## What "the best" can honestly mean

No organisation publishes a global ranking of DevOps engineers, so no roadmap can promise a place in one. What can be measured is breadth and proof:

- **Kubestronaut.** CNCF gives this title to people who hold all five Kubernetes certificates at once: CKA, CKAD, CKS, KCNA and KCSA. This roadmap earns them in Levels 5 and 8. CNCF lists perks such as 50%-off exam coupons, and every certificate must stay unexpired to keep the title.
- **Breadth.** GitHub Actions, Terraform, Vault, GitOps, Prometheus and AWS DevOps Professional.
- **Proof.** A running capstone platform with measured DORA metrics, SLOs, a failover you timed and four public write-ups.

Certificates open interviews; teams hire people who can show a working system and explain how it failed. At 2 hours a day this is about 1.6 years.

## What it costs (exam fees, as read in October 2026)

| Credential | Fee | Level |
|---|---|---|
| GitHub Actions (GH-200) | about US$99 | 2 |
| AWS Solutions Architect – Associate (SAA-C03) | US$150 | 3 |
| HashiCorp Terraform Associate | about US$70.50 | 4 |
| Kubernetes and Cloud Native Associate (KCNA) | about US$250 | 5 |
| Certified Kubernetes Administrator (CKA) | about US$395–445 | 5 |
| Certified Kubernetes Application Developer (CKAD) | about US$395–445 | 5 |
| GitOps Certified Associate (CGOA) | about US$250 (confirm) | 6 |
| Prometheus Certified Associate (PCA) | about US$250 | 7 |
| HashiCorp Vault Associate | about US$70.50 | 8 |
| Kubernetes and Cloud Native Security Associate (KCSA) | about US$250 | 8 |
| Certified Kubernetes Security Specialist (CKS) | about US$395–445 | 8 |
| AWS DevOps Engineer – Professional (DOP-C02) | US$300 | 9 |

The total is about **US$2,900 to US$3,050 before taxes, bundles and vouchers**. Ways to cut it:

1. **Space the exams out.** The plan puts them roughly one level apart.
2. **Look for Linux Foundation and CNCF bundles and sales.** CKA, CKAD and CKS are often cheaper in bundles, and the exam fee normally includes one free retake.
3. **Use the AWS 50% voucher** you get after passing an AWS exam.
4. **Ask your employer or school** whether they pay for certifications.
5. **Stay inside free tiers for labs.** Run Kubernetes locally on kind or k3d, use free CI minutes, and delete cloud resources after every lab.

CNCF and HashiCorp certificates reportedly expire after about two years, GitHub Actions after about two years and AWS after three, so budget for renewals.

## The 10 levels

| Level | Dates | Hours | Focus |
|---|---|---|---|
| 1. Foundations: Linux, networking, Git and scripting | 2 Nov 2026 – 13 Dec 2026 | 84 | Work comfortably in a Linux terminal, understand networks and the web, use Git properly, and write Bash and Python scripts that automate real chores. |
| 2. CI/CD with GitHub Actions, and containers with Docker | 14 Dec 2026 – 24 Jan 2027 | 84 | Build, test and ship software automatically, package it in containers, and earn the GitHub Actions certification. |
| 3. Cloud for DevOps: AWS Solutions Architect Associate | 25 Jan 2027 – 21 Mar 2027 | 112 | Understand how real production infrastructure is built on a major cloud, and pass AWS Certified Solutions Architect – Associate. If you already hold it from the Cloud Computing roadmap, use these eight weeks for the Level 9 material instead. |
| 4. Infrastructure as code and configuration management | 22 Mar 2027 – 2 May 2027 | 84 | Describe infrastructure and server configuration as code, keep it in Git, and earn the HashiCorp Terraform Associate. |
| 5. Kubernetes: KCNA, CKA and CKAD | 3 May 2027 – 25 Jul 2027 | 168 | Run and troubleshoot Kubernetes yourself and earn the Kubernetes and Cloud Native Associate (KCNA), the Certified Kubernetes Administrator (CKA) and the Certified Kubernetes Application Developer (CKAD). |
| 6. GitOps, delivery and platform engineering | 26 Jul 2027 – 19 Sep 2027 | 112 | Deliver software with Git as the single source of truth, build a small internal platform that other developers can use, and earn the GitOps Certified Associate (CGOA). |
| 7. Observability and site reliability | 20 Sep 2027 – 14 Nov 2027 | 112 | See what your systems are doing, set meaningful reliability targets, respond to incidents calmly, and earn the Prometheus Certified Associate (PCA). |
| 8. DevSecOps: Vault, Kubernetes security and the Kubestronaut title | 15 Nov 2027 – 23 Jan 2028 | 140 | Build security into pipelines, secrets handling and clusters, and earn the Vault Associate, the Kubernetes and Cloud Security Associate (KCSA) and the Certified Kubernetes Security Specialist (CKS), which completes the Kubestronaut set. |
| 9. Professional cloud DevOps: AWS DevOps Engineer Professional | 24 Jan 2028 – 2 Apr 2028 | 140 | Automate delivery, governance and recovery across many cloud accounts and pass AWS Certified DevOps Engineer – Professional. Azure or Google Cloud learners can swap in the matching DevOps expert exam. |
| 10. Capstone, portfolio and your first DevOps role | 3 Apr 2028 – 28 May 2028 | 112 | Finish the capstone platform, prove it with numbers, publish your work, and apply for DevOps, platform or SRE roles or freelance work. |

## Level 1: Foundations: Linux, networking, Git and scripting

**2 Nov 2026 – 13 Dec 2026 · 84 hours.** Work comfortably in a Linux terminal, understand networks and the web, use Git properly, and write Bash and Python scripts that automate real chores.

### 2 – 15 Nov

Linux first. Free route: Linux Journey, the OverTheWire Bandit game and the Linux Foundation’s free Introduction to Linux (LFS101) in audit mode. Set up a Linux machine you can break: a free Ubuntu virtual machine (VirtualBox) or WSL. Learn files and permissions, users, processes, systemd services, package managers, SSH keys, cron, logs and disk usage. Paid route: none needed.

[Linux Journey](https://linuxjourney.com/) · [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) · [LFS101: Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/) · [The Missing Semester (MIT)](https://missing.csail.mit.edu/)

### 16 – 29 Nov

Networking that DevOps work really uses. Free route: Professor Messer’s free networking videos. IP addressing and CIDR subnetting, DNS, TCP vs UDP, HTTP and TLS, NAT, firewalls, load balancers and reverse proxies. Practise with ping, traceroute, dig, curl and Wireshark. Run nginx on your VM and put a TLS certificate on it.

[Professor Messer free videos](https://www.professormesser.com/) · [Wireshark](https://www.wireshark.org/) · [nginx documentation](https://nginx.org/en/docs/)

### 30 Nov – 6 Dec

Git and GitHub. Free route: GitHub Skills courses and the Pro Git book. Branches, rebasing, pull requests, merge conflicts and code review. Create the repo called devops-journey for your notes and labs; everything you build goes in it.

[GitHub Skills](https://skills.github.com/) · [Pro Git book](https://git-scm.com/book/en/v2) · [GitHub](https://github.com/)

### 7 – 13 Dec

Scripting and your first automation. Free route: Bash from the Missing Semester plus CS50’s Python lectures 0–3. Write a Bash backup script with logging and a Python script that calls a public API and sends you an alert. Checkpoint 13 Dec 2026: a Linux server you configured entirely from a script, with a backup that you can restore.

[CS50P (Python)](https://cs50.harvard.edu/python/) · [Bash manual](https://www.gnu.org/software/bash/manual/)

> Weekly rhythm used in every level: Monday and Tuesday learn, Wednesday and Thursday hands-on lab, Friday review and practice questions, Saturday build on your capstone platform (or sit an exam), Sunday publish a short note on what broke and how you fixed it. Cost in this level: US$0. The capstone through the whole roadmap is one real application (a small booking tool, clinic records system or school portal) that you will build, ship, break and improve level by level.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 13 Dec 2026 | Checkpoint 1: a Linux server built from a script, with a tested backup | Free | Foundations checkpoint signed off by your mentor |

**You should hold:** Comfortable in a Linux terminal and SSH; Can subnet a network by hand; Git workflow with a public devops-journey repo; Bash and Python scripts that automate real chores.

**Milestones**

- [ ] Study group formed and first call held
- [ ] Linux VM running and snapshotted
- [ ] OverTheWire Bandit to level 15
- [ ] Can subnet a /24 into four networks without a calculator
- [ ] devops-journey repo created and used daily
- [ ] Checkpoint 1 signed off

## Level 2: CI/CD with GitHub Actions, and containers with Docker

**14 Dec 2026 – 24 Jan 2027 · 84 hours.** Build, test and ship software automatically, package it in containers, and earn the GitHub Actions certification.

### 14 – 27 Dec

Docker. Free route: Docker’s official getting-started guide and Play with Docker. Write Dockerfiles, use multi-stage builds, volumes and networks, compose multi-container apps, run as a non-root user and scan images with Trivy. Containerise a small web app and a database for your capstone. Paid route: none needed.

[Docker docs](https://docs.docker.com/get-started/) · [Play with Docker](https://labs.play-with-docker.com/) · [Trivy](https://trivy.dev/)

### 28 Dec – 17 Jan

GitHub Actions in depth. Free route: GitHub’s own documentation and GitHub Skills. Workflows, events, jobs and runners, matrix builds, caching, secrets and environments, reusable workflows, composite actions, artifacts, and deploying with approvals. Build a pipeline that lints, tests, builds an image, scans it and pushes it to a registry on every pull request.

[GitHub Actions docs](https://docs.github.com/actions) · [GitHub Skills](https://skills.github.com/) · [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

### 18 – 24 Jan

Exam week. Work through the exam’s skills outline and the practice assessment on Microsoft Learn, then sit 23 Jan 2027 (about 100 minutes, pass at 700 out of 1000, online proctored). The price is reported as about US$99 but varies by region and was not confirmed on the vendor page, so check before you pay. Do not use dumps.

[GH-200 on Microsoft Learn](https://learn.microsoft.com/credentials/certifications/) · [Pearson VUE](https://home.pearsonvue.com/)

> Money in this level: GitHub Actions exam about US$99 (confirm). Public repositories get free Actions minutes; private ones have a monthly free allowance, so check your limits before running heavy builds. Never put real secrets in a workflow file.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 23 Jan 2027 | [GitHub Actions certification (GH-200)](https://learn.microsoft.com/credentials/certifications/) | About US$99 (confirm) | GitHub Actions certification (valid about 2 years) |

**You should hold:** GitHub Actions certification; A containerised capstone app; A pipeline that tests, scans and publishes an image on every pull request.

**Milestones**

- [ ] Capstone app running in Docker Compose
- [ ] Image scanned with Trivy and the findings triaged
- [ ] Pipeline runs on every pull request
- [ ] Reusable workflow written and used twice
- [ ] Secrets and environments configured with an approval step
- [ ] GitHub Actions exam passed

## Level 3: Cloud for DevOps: AWS Solutions Architect Associate

**25 Jan 2027 – 21 Mar 2027 · 112 hours.** Understand how real production infrastructure is built on a major cloud, and pass AWS Certified Solutions Architect – Associate. If you already hold it from the Cloud Computing roadmap, use these eight weeks for the Level 9 material instead.

### 25 – 31 Jan

Open and secure an AWS account first. New accounts get a free plan with up to US$200 in credits (US$100 at sign-up, more for using services) lasting up to six months, with about 30 always-free services continuing afterwards. Enable MFA on the root user, stop using root, and set a US$1 budget alarm. Never put access keys in code or Git.

[AWS Free Tier](https://aws.amazon.com/free/) · [AWS Skill Builder](https://skillbuilder.aws/) · [AWS Billing and Cost Management](https://aws.amazon.com/aws-cost-management/)

### 1 – 21 Feb

Core services. Free route: AWS Skill Builder’s free Exam Prep for the Solutions Architect Associate exam and AWS Workshops. Paid route: one video course with labs (about US$20–45 on sale). Build a VPC from scratch (public and private subnets, route tables, internet and NAT gateways, security groups vs network ACLs), then EC2, Auto Scaling, load balancers, S3, RDS, IAM roles and policies. Delete NAT gateways and load balancers after every lab.

[SAA-C03 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-associate/) · [AWS Workshops](https://workshops.aws/) · [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### 22 Feb – 7 Mar

Decoupling, resilience and cost. SQS, SNS, EventBridge, Lambda, Route 53 routing, CloudFront, backup and disaster-recovery patterns, Cost Explorer and Budgets. Deploy your capstone to AWS by hand, write down every manual step, and keep that list: you will automate it in Level 4.

[Route 53 documentation](https://docs.aws.amazon.com/route53/) · [AWS Architecture Center](https://aws.amazon.com/architecture/) · [AWS Pricing Calculator](https://calculator.aws/)

### 8 – 21 Mar

Practice and exam. Official questions in Skill Builder (free), then a third-party practice set (about US$15) until you score 85% repeatedly. Book at least three weeks ahead. Sit 20 Mar 2027 (65 questions, about 130 minutes, pass at 720 out of 1000).

[AWS Skill Builder](https://skillbuilder.aws/) · [Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws)

> Money in this level: exam about US$150 (US$75 with a 50% voucher from an earlier AWS pass). Request the free ESL +30 minutes accommodation in your AWS Certification account if English is not your first language.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 20 Mar 2027 | [AWS Certified Solutions Architect – Associate (SAA-C03)](https://aws.amazon.com/certification/certified-solutions-architect-associate/) | US$150 plus tax | AWS Certified Solutions Architect – Associate (valid 3 years) |

**You should hold:** AWS Certified Solutions Architect – Associate; The capstone running on AWS with a written list of manual steps; A secured AWS account with MFA and a budget alarm.

**Milestones**

- [ ] AWS account secured with MFA and a budget alarm
- [ ] VPC built from scratch
- [ ] Capstone deployed by hand with every step written down
- [ ] 85% on practice exams three times
- [ ] Solutions Architect Associate passed
- [ ] All lab resources deleted and the bill checked

## Level 4: Infrastructure as code and configuration management

**22 Mar 2027 – 2 May 2027 · 84 hours.** Describe infrastructure and server configuration as code, keep it in Git, and earn the HashiCorp Terraform Associate.

### 22 Mar – 18 Apr

Terraform. Free route: HashiCorp’s free tutorials. Providers, state and remote state (S3 plus locking), variables and outputs, modules, workspaces, data sources, lifecycle rules and import. Rebuild your Level 3 manual deployment as Terraform and destroy and recreate it from scratch. Use pull requests that run terraform fmt, validate and plan. Add Checkov or tfsec to catch insecure settings.

[Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) · [Terraform Associate](https://developer.hashicorp.com/certifications/infrastructure-automation) · [Checkov](https://www.checkov.io/) · [OpenTofu](https://opentofu.org/)

### 19 – 25 Apr

Configuration management with Ansible. Free route: Ansible’s official documentation. Inventories, playbooks, roles, handlers, templates, Vault for secrets, idempotence. Configure the capstone’s servers with a role and run it twice to prove it changes nothing the second time.

[Ansible documentation](https://docs.ansible.com/) · [Ansible Galaxy](https://galaxy.ansible.com/)

### 26 Apr – 2 May

Exam week. HashiCorp’s sample questions plus a practice set (about US$10–15). Sit 1 May 2027 (multiple choice, online proctored, about one hour; the Associate fee is reported as US$70.50 with no free retake). Check the current exam version on the HashiCorp page before booking.

[HashiCorp certifications](https://developer.hashicorp.com/certifications)

> Money in this level: Terraform Associate about US$70.50 plus taxes (confirm). HashiCorp changed licences in 2023, so OpenTofu, the open-source fork, is worth knowing; the exam covers Terraform. Never commit state files or variable files containing secrets.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 1 May 2027 | [HashiCorp Certified: Terraform Associate](https://developer.hashicorp.com/certifications/infrastructure-automation) | About US$70.50 plus taxes (confirm) | HashiCorp Certified: Terraform Associate (valid about 2 years) |

**You should hold:** HashiCorp Certified: Terraform Associate; The capstone’s AWS infrastructure fully in Terraform with remote state; An Ansible role that is idempotent.

**Milestones**

- [ ] Capstone infrastructure destroyed and recreated from Terraform
- [ ] Remote state with locking configured
- [ ] Pull requests run plan and a security scan
- [ ] Ansible role runs twice with no changes the second time
- [ ] Module written and reused
- [ ] Terraform Associate passed

## Level 5: Kubernetes: KCNA, CKA and CKAD

**3 May 2027 – 25 Jul 2027 · 168 hours.** Run and troubleshoot Kubernetes yourself and earn the Kubernetes and Cloud Native Associate (KCNA), the Certified Kubernetes Administrator (CKA) and the Certified Kubernetes Application Developer (CKAD).

### 3 – 16 May

Cloud-native basics and KCNA. Free route: the free LFS158 Introduction to Kubernetes and the Cloud Native Computing Foundation’s learning material. Pods, deployments, services, containers vs VMs, the cloud-native landscape and observability basics. Sit 15 May 2027 (multiple choice, about 90 minutes; reported at about US$250, confirm on the vendor page).

[LFS158: Introduction to Kubernetes](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) · [KCNA](https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/) · [Kubernetes docs](https://kubernetes.io/docs/home/)

### 17 May – 20 Jun

CKA preparation. Free route: Killercoda scenarios and Kelsey Hightower’s Kubernetes the Hard Way. Cluster architecture and installation with kubeadm, workloads and scheduling, services and ingress, storage, RBAC, networking, troubleshooting, upgrades and etcd backup and restore. The exam is hands-on in a terminal, so practise with only the allowed documentation open. Your exam purchase includes two killer.sh simulator sessions. Run a cluster on your own machines or on cheap cloud VMs and tear it down after each study session.

[CKA programme](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/) · [Killercoda](https://killercoda.com/) · [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) · [killer.sh](https://killer.sh/)

### 21 – 27 Jun

CKA exam week. Sit 26 Jun 2027 (hands-on, about two hours, online proctored). The fee normally includes one free retake; confirm on the Linux Foundation page. The price is reported anywhere from about US$395 to US$445, so look for bundle or sale pricing before you pay.

[Linux Foundation certifications](https://training.linuxfoundation.org/certification/)

### 28 Jun – 25 Jul

CKAD preparation. Application side of Kubernetes: Deployments, ConfigMaps and Secrets, probes, resource limits, Jobs and CronJobs, multi-container pods, Services and Ingress, NetworkPolicy, Helm and Kustomize basics, and fast kubectl usage. Build and deploy your capstone as Kubernetes manifests. Sit 24 Jul 2027 (hands-on, about two hours).

[CKAD programme](https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/) · [Helm](https://helm.sh/docs/) · [Kustomize](https://kubectl.docs.kubernetes.io/references/kustomize/)

> Money in this level: KCNA about US$250, CKA about US$395–445 and CKAD about US$395–445, so roughly US$1,050–1,150 (confirm; bundles and sales are common, and Kubestronaut holders get 50% coupons later). CNCF certifications reportedly expire after two years. KCNA and the later KCSA together with CKA, CKAD and CKS make the Kubestronaut title: see Level 8.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 15 May 2027 | [Kubernetes and Cloud Native Associate (KCNA)](https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/) | About US$250 (confirm) | Kubernetes and Cloud Native Associate (CNCF) |
| 26 Jun 2027 | [Certified Kubernetes Administrator (CKA)](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/) | About US$395–445 (confirm; sales are common) | Certified Kubernetes Administrator (CNCF) |
| 24 Jul 2027 | [Certified Kubernetes Application Developer (CKAD)](https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/) | About US$395–445 (confirm) | Certified Kubernetes Application Developer (CNCF) |

**You should hold:** Kubernetes and Cloud Native Associate; Certified Kubernetes Administrator; Certified Kubernetes Application Developer; The capstone running on a cluster you built and can rebuild.

**Milestones**

- [ ] Cluster built with kubeadm
- [ ] etcd backup and restore practised
- [ ] RBAC, NetworkPolicy and ingress labs done
- [ ] Capstone deployed with manifests and Helm
- [ ] killer.sh simulator scores above 75%
- [ ] KCNA, CKA and CKAD passed

## Level 6: GitOps, delivery and platform engineering

**26 Jul 2027 – 19 Sep 2027 · 112 hours.** Deliver software with Git as the single source of truth, build a small internal platform that other developers can use, and earn the GitOps Certified Associate (CGOA).

### 26 Jul – 15 Aug

GitOps principles and Argo CD. Free route: the OpenGitOps principles and the Argo CD documentation, practised on a local kind or k3d cluster. Declarative desired state, pull-based reconciliation, drift detection, app-of-apps, Helm and Kustomize in Argo CD, sync waves, rollbacks and multi-environment promotion. Move the capstone to a GitOps flow: a merged pull request is the only way to change production.

[OpenGitOps](https://opengitops.dev/) · [Argo CD docs](https://argo-cd.readthedocs.io/) · [kind](https://kind.sigs.k8s.io/) · [Flux docs](https://fluxcd.io/flux/)

### 16 – 29 Aug

Progressive delivery and release safety. Blue/green and canary releases, feature flags, Argo Rollouts, automated rollback on failing metrics, database migrations that are safe to roll back, and a change policy that fits a small team. Measure the four DORA metrics for your capstone: deployment frequency, lead time for changes, change failure rate and time to restore.

[Argo Rollouts](https://argoproj.github.io/rollouts/) · [DORA research](https://dora.dev/) · [OpenFeature](https://openfeature.dev/)

### 30 Aug – 12 Sep

Platform engineering. Free route: the CNCF Platforms white paper and the Backstage documentation. Golden paths, self-service templates, developer portals, treating the platform as a product with users, and keeping its scope small. Build a template that lets another student create a new service with a pipeline, a container, Kubernetes manifests and monitoring in one step.

[CNCF Platforms white paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) · [Backstage](https://backstage.io/docs/) · [Crossplane](https://docs.crossplane.io/)

### 13 – 19 Sep

Exam week. Review the exam curriculum, then sit 18 Sep 2027 (multiple choice, online proctored; the price is not confirmed here but CNCF associate exams are reported at about US$250, so check the vendor page). Show your platform template to a classmate and watch them use it without help.

[GitOps Certified Associate](https://training.linuxfoundation.org/certification/)

> Money in this level: CGOA about US$250 (confirm). Everything else runs on free tools and a local cluster, so keep cloud spend near zero.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 18 Sep 2027 | [GitOps Certified Associate (CGOA)](https://training.linuxfoundation.org/certification/) | About US$250 (confirm) | GitOps Certified Associate (CNCF) |

**You should hold:** GitOps Certified Associate; A GitOps flow where a merged pull request is the only way to change production; DORA metrics measured for the capstone; A self-service service template another person has used.

**Milestones**

- [ ] Argo CD (or Flux) managing the capstone from Git
- [ ] Canary release with automatic rollback working
- [ ] DORA metrics measured weekly
- [ ] Service template built and used by someone else
- [ ] Drift introduced on purpose and corrected by GitOps
- [ ] GitOps Certified Associate passed

## Level 7: Observability and site reliability

**20 Sep 2027 – 14 Nov 2027 · 112 hours.** See what your systems are doing, set meaningful reliability targets, respond to incidents calmly, and earn the Prometheus Certified Associate (PCA).

### 20 Sep – 10 Oct

Metrics with Prometheus and Grafana. Free route: Prometheus and Grafana documentation and tutorials. Exporters, PromQL, recording and alerting rules, Alertmanager routing, service discovery in Kubernetes, and dashboards that answer a question. Instrument your capstone with custom metrics and build RED and USE dashboards.

[Prometheus docs](https://prometheus.io/docs/) · [Grafana tutorials](https://grafana.com/tutorials/) · [PCA certification](https://training.linuxfoundation.org/certification/)

### 11 – 24 Oct

Logs and traces. Free route: OpenTelemetry docs, Loki and Tempo. Structured logging, centralised logs, distributed tracing, correlating a trace with its logs and metrics, sampling, and cost control for telemetry. Send traces from your capstone through an OpenTelemetry Collector.

[OpenTelemetry](https://opentelemetry.io/docs/) · [Grafana Loki](https://grafana.com/docs/loki/latest/) · [Grafana Tempo](https://grafana.com/docs/tempo/latest/)

### 25 Oct – 7 Nov

Site reliability practice. Free route: the free Google SRE book and workbook chapters on service level objectives, error budgets, toil, incident response and blameless post-mortems. Define SLOs for the capstone, alert on burn rate instead of raw thresholds, write a runbook for each alert, and hold a game day where you break the system and recover with only your runbooks.

[Google SRE book (free)](https://sre.google/sre-book/table-of-contents/) · [Google SRE workbook (free)](https://sre.google/workbook/table-of-contents/) · [Chaos Mesh](https://chaos-mesh.org/docs/)

### 8 – 14 Nov

Exam week. Practise PromQL until you can write queries without looking things up, then sit 13 Nov 2027 (multiple choice, about 90 minutes, online proctored; reported at about US$250).

[Prometheus Certified Associate](https://training.linuxfoundation.org/certification/prometheus-certified-associate/)

> Money in this level: PCA about US$250 (confirm). Grafana Cloud and similar vendors have free tiers, but a self-hosted stack on your cluster costs nothing; watch the disk space metrics and logs can use.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 13 Nov 2027 | [Prometheus Certified Associate (PCA)](https://training.linuxfoundation.org/certification/prometheus-certified-associate/) | About US$250 (confirm) | Prometheus Certified Associate (CNCF) |

**You should hold:** Prometheus Certified Associate; Metrics, logs and traces for the capstone; SLOs, burn-rate alerts and runbooks; A published game-day report.

**Milestones**

- [ ] Prometheus and Grafana monitoring the capstone
- [ ] Custom application metrics added
- [ ] Traces flowing through an OpenTelemetry Collector
- [ ] SLOs defined with burn-rate alerts
- [ ] Game day held and report published
- [ ] Prometheus Certified Associate passed

## Level 8: DevSecOps: Vault, Kubernetes security and the Kubestronaut title

**15 Nov 2027 – 23 Jan 2028 · 140 hours.** Build security into pipelines, secrets handling and clusters, and earn the Vault Associate, the Kubernetes and Cloud Security Associate (KCSA) and the Certified Kubernetes Security Specialist (CKS), which completes the Kubestronaut set.

### 15 Nov – 19 Dec

Secrets and pipeline security. Free route: HashiCorp’s free Vault tutorials and OWASP resources. Vault auth methods, policies, dynamic secrets and the KV engine, plus secret scanning (gitleaks), dependency scanning, image scanning (Trivy), SBOMs, signed images with cosign and least-privilege pipeline permissions. Remove every static secret from your capstone’s pipeline. Sit 18 Dec 2027 (multiple choice, online proctored, about one hour; reported at about US$70.50).

[Vault tutorials](https://developer.hashicorp.com/vault/tutorials) · [Vault Associate](https://developer.hashicorp.com/certifications/security-automation) · [gitleaks](https://github.com/gitleaks/gitleaks) · [Sigstore cosign](https://docs.sigstore.dev/) · [OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/)

### 20 Dec – 2 Jan

Cloud-native security concepts and KCSA. Free route: Kubernetes security documentation and the CNCF security white papers. Threat models for clusters, supply-chain risks, Pod Security Standards, policy engines (Kyverno or OPA Gatekeeper), and the 4Cs of cloud-native security. Sit 1 Jan 2028 (multiple choice, about 90 minutes; reported at about US$250).

[Kubernetes security docs](https://kubernetes.io/docs/concepts/security/) · [Kyverno](https://kyverno.io/docs/) · [CNCF security white paper](https://github.com/cncf/tag-security)

### 3 – 23 Jan

CKS preparation. The CKS requires a current CKA. Cluster hardening, RBAC least privilege, network policies, secrets handling, image scanning, runtime detection with Falco, audit logs, AppArmor and seccomp, and supply-chain controls. Practise on Killercoda scenarios and with the killer.sh simulator that comes with the exam. Sit 22 Jan 2028 (hands-on, about two hours). Only test clusters you own.

[CKS programme](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/) · [Falco](https://falco.org/) · [Killercoda](https://killercoda.com/) · [Kubestronaut programme](https://www.cncf.io/training/kubestronaut/)

> Money in this level: Vault Associate about US$70.50, KCSA about US$250 and CKS about US$395–445 (confirm all three). Passing the CKS completes the five certificates for the Kubestronaut title (CKA, CKAD, CKS, KCNA and KCSA); CNCF lists perks such as five 50%-off exam coupons a year, but every certificate must be unexpired to keep the title, and they reportedly expire after two years, so plan renewals.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 18 Dec 2027 | [HashiCorp Certified: Vault Associate](https://developer.hashicorp.com/certifications/security-automation) | About US$70.50 plus taxes (confirm) | HashiCorp Certified: Vault Associate |
| 1 Jan 2028 | [Kubernetes and Cloud Native Security Associate (KCSA)](https://training.linuxfoundation.org/certification/) | About US$250 (confirm) | Kubernetes and Cloud Native Security Associate (CNCF) |
| 22 Jan 2028 | [Certified Kubernetes Security Specialist (CKS)](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/) | About US$395–445 (confirm) | Certified Kubernetes Security Specialist (CNCF); with KCNA, KCSA, CKA and CKAD this completes the Kubestronaut set |

**You should hold:** HashiCorp Certified: Vault Associate; Kubernetes and Cloud Native Security Associate; Certified Kubernetes Security Specialist; All five Kubestronaut certificates held at once; A capstone pipeline with no static secrets, scanned and signed images.

**Milestones**

- [ ] Vault serving dynamic secrets to the capstone
- [ ] No static secrets left in the pipeline
- [ ] Images scanned and signed in the pipeline
- [ ] Kyverno or Gatekeeper policies enforced on the cluster
- [ ] Falco runtime rule triggered and handled
- [ ] Vault Associate, KCSA and CKS passed

## Level 9: Professional cloud DevOps: AWS DevOps Engineer Professional

**24 Jan 2028 – 2 Apr 2028 · 140 hours.** Automate delivery, governance and recovery across many cloud accounts and pass AWS Certified DevOps Engineer – Professional. Azure or Google Cloud learners can swap in the matching DevOps expert exam.

### 24 Jan – 13 Feb

CI/CD at scale on AWS. CodePipeline, CodeBuild, CodeDeploy (in-place, blue/green, canary), GitHub Actions with OIDC to AWS (no stored keys), and automated rollback on alarms for EC2, ECS, Lambda and EKS. Free route: the free Exam Prep for the DevOps Professional exam in Skill Builder and AWS Workshops.

[DOP-C02 exam guide](https://aws.amazon.com/certification/certified-devops-engineer-professional/) · [GitHub OIDC with AWS](https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) · [CodeDeploy](https://docs.aws.amazon.com/codedeploy/)

### 14 Feb – 5 Mar

Governance and infrastructure at scale. AWS Organizations and Control Tower, service control policies, CloudFormation StackSets and drift detection, CDK pipelines, Service Catalog, AWS Config conformance packs with auto-remediation, Systems Manager automation and tagging policy.

[AWS Organizations](https://docs.aws.amazon.com/organizations/) · [AWS Config](https://docs.aws.amazon.com/config/) · [AWS CDK Workshop](https://cdkworkshop.com/)

### 6 – 19 Mar

Monitoring, incident response and resilience on AWS. CloudWatch and X-Ray, EventBridge-driven automation, multi-region failover and backup strategies, and chaos testing with AWS Fault Injection Service. Run a two-region failover for the capstone and time it.

[AWS Fault Injection Service](https://docs.aws.amazon.com/fis/) · [AWS X-Ray](https://docs.aws.amazon.com/xray/) · [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/)

### 20 Mar – 2 Apr

Practice and exam. Professional questions are long scenarios with several plausible answers: practise picking the answer that satisfies the one hard constraint (cost, latency, effort or security). Three full-length practice exams, then sit 1 Apr 2028 (75 questions, about 180 minutes, pass at 750 out of 1000). Expect 150 or more hours of study overall.

[Tutorials Dojo](https://tutorialsdojo.com/) · [Pearson VUE (AWS)](https://home.pearsonvue.com/aws) · [Microsoft AZ-400 (alternative)](https://learn.microsoft.com/certifications/exams/az-400) · [Google Professional Cloud DevOps Engineer (alternative)](https://cloud.google.com/learn/certification/cloud-devops-engineer)

> Money in this level: exam about US$300 (US$150 with a 50% voucher). Alternatives, if your employer or region favours another cloud: Microsoft’s AZ-400 (current, with a price that varies by region) and Google’s Professional Cloud DevOps Engineer (reported at about US$200). Confirm any alternative on its vendor page. If practice scores stay under 75% two weeks before the date, move the exam rather than sit it unready.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 1 Apr 2028 | [AWS Certified DevOps Engineer – Professional (DOP-C02)](https://aws.amazon.com/certification/certified-devops-engineer-professional/) | US$300 plus tax | AWS Certified DevOps Engineer – Professional (valid 3 years) |

**You should hold:** AWS Certified DevOps Engineer – Professional; GitHub Actions deploying to AWS with OIDC and no stored keys; A tested two-region failover.

**Milestones**

- [ ] Pipeline deploys with OIDC and automatic rollback
- [ ] StackSets or CDK pipeline across two accounts
- [ ] Config rule with auto-remediation working
- [ ] Two-region failover tested and timed
- [ ] Three full practice exams above 80%
- [ ] DevOps Engineer Professional passed

## Level 10: Capstone, portfolio and your first DevOps role

**3 Apr 2028 – 28 May 2028 · 112 hours.** Finish the capstone platform, prove it with numbers, publish your work, and apply for DevOps, platform or SRE roles or freelance work.

### 3 Apr – 7 May

Finish the capstone platform. By now it has a pipeline, containers, infrastructure as code, Kubernetes, GitOps, observability, security scanning and a tested failover. Write a README with an architecture diagram, a runbook, cost figures, your DORA metrics and your SLOs. Have two classmates deploy a change through it without your help. Checkpoint 13 May 2028.

[DORA research](https://dora.dev/) · [C4 model diagrams](https://c4model.com/) · [Excalidraw](https://excalidraw.com/)

### 8 – 21 May

Portfolio and story. Publish four write-ups: one design decision, one outage you caused and fixed (blameless post-mortem), one cost you cut with the numbers, and one security fix. Make your repository public (remove secrets first), pin the best projects, and put every credential with its Credly link on one page. Practise explaining the platform in five minutes to a non-technical person.

[GitHub profile README](https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) · [Credly](https://www.credly.com/) · [Cloud Resume Challenge](https://cloudresumechallenge.dev/)

### 22 – 28 May

Apply. Choose ten target teams (platform, SRE, DevOps, cloud engineering or freelance infrastructure work), tailor each application to a problem they have, and prepare for interviews: Linux troubleshooting, networking, an incident walk-through, a system-design question and a live debugging exercise. Mentor review: 28 May 2028.

[DevOps Exercises](https://github.com/bregman-arie/devops-exercises) · [90 Days of DevOps](https://github.com/MichaelCade/90DaysOfDevOps) · [roadmap.sh DevOps](https://roadmap.sh/devops)

> Money in this level: nothing required. Certificates open interviews, but teams hire people who can show a working system and explain their failures. About elite status: no global ranking of DevOps engineers exists. What can be measured is the Kubestronaut title (all five CNCF Kubernetes certificates held at once, with a public list of holders), the breadth of other credentials, and public proof such as a running platform with real metrics. Keep every certificate unexpired and plan renewals.

**Exams and checkpoints**

| Date | Name | Cost | You earn |
|---|---|---|---|
| 13 May 2028 | Checkpoint 10: capstone platform demonstration | Free | Capstone checkpoint signed off by your mentor |
| 28 May 2028 | Checkpoint 11: portfolio and application pack review | Free | Portfolio checkpoint signed off by your mentor |

**You should hold:** A capstone platform with measured DORA metrics and SLOs; Four published engineering write-ups; A public portfolio listing every credential; Ten tailored applications sent.

**Milestones**

- [ ] Two classmates deployed a change through your platform unaided
- [ ] Architecture diagram, runbook, cost and DORA metrics published
- [ ] Four engineering write-ups published
- [ ] Public portfolio page with every credential live
- [ ] Ten tailored applications sent
- [ ] Capstone and portfolio checkpoints signed off

## Honest limits

- Exam prices and rules change. They were read from vendor pages and third-party roundups in October 2026, and sources disagree (for example, CKA, CKAD and CKS are listed at US$395 in some places and US$445 in others). Several figures are marked "confirm". Check the vendor page before paying, and expect AWS and CNCF to replace some exam versions before the 2028 dates.
- Dates after 2027 are targets. If you fall behind, move the exam; do not sit it unready.
- Never use exam dumps. They break certification agreements and can get a credential revoked.
- Cloud services bill by the hour. NAT gateways, load balancers, managed Kubernetes control planes and logging can surprise you. Keep a budget alarm and delete after every lab.
- Only test security tools against systems you own.
- No certificate substitutes for running something real and breaking it on purpose. Keep the capstone alive.
