##### Types of securing

1. Authentication
2. Authorization
3. Confidentiality
4. Data/Message Integrity
5. Accountability
6. Availability.


1. Authentication
  - Passwords (something you know)
  - Token (something you have)
  - Biometrics (something you are)


2. Authorization
  - Access Controlled Lists
    - ACL Models:
      - Mandatory(MAC)
      - Discretionary(DAC)
      - Role-Based(RBAC)

3. Confidentiality
  - Keeping secrets !
  - achieved by using cryptography, db views etc.

4. Data/Message Integrity
  - Hashing data

5. Accountability
  - Audits and audit trails.
  - Timestamping logs.

6. Availability.
  - Uptime.
  - Higly available arch (remove single point of failure)


##### Types of Threats

1. Defacement
  - attacks on website.

2. Infiltration
  - unauth access to servers/db etc.

3. Phishing
  - hmm.

4. Pharming
  - automated data load to real sites.
  - i.e spoof sensitive data.

5. Insider Threats
  - insiders with a black heart !

6. Click Fraud
  - click-baiters.

7. Denial of Service
  - hahaha.

8. Data Theft/Loss
  - black hearts.


##### Mitigations

|Attack Type | Mitigation
|--|--|
|Cross Site Scripting| set httpOnly =true (Disallow any javascript code to access cookie)
|SQL injection | Bind params using SQLBind |
| OS command injection | setup proper ACLs i.e no access to root etc|
| URL redirects| Do not allow redirection to malicious sites !|
| <li>Path traversal attacks</li><li>unrestricted file uploads</li> | least privilege security principle |
| Cross-Site Request Forgery (XSRF)|<li>Implement XSRF tokens</li><li>Implement short timeouts</li>|
| Session hijacking |<li>Implement SSL</li><li>Implement short timeouts</li>|
| Insecure configs | <li>Harden the servers.</li><li>Use LDAP</li>|
| Missing encryption | <li>Encrypt data servers.</li><li>Use LDAP</li>|



























/
