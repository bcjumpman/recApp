# README for RecApp Academy

App being made: AI-Powered Job Application Assistant
Tech Stack:
- EXPRESS (JS)
- EXPRESS Router
- CORS
- NODEMON

### Functional Requirements:
- user profiles (read (R), write (CUD))
- job descriptions (write (C?))
- generate cover letter, outreach, resume, f/u next steps
### Non-functional Requirements:
- availability (uptime 99.99xxx%)
- low-latency (~300ms)
- reliable 

### Database design
- Data: ID(INT), name(STR), age(INT), skills(VARCHAR?), location(STR), email(STR), phone number(NUM), work history(VARCHAR), education(STR), projects/apps(STR), imageURL(STR)
  - User:
  - Work: id, user(FK), description, company
  - Project:
  - Skills: Js, Py

![RecApp_-_Fall_2024](https://github.com/user-attachments/assets/aa81a165-146e-4eb1-8fdb-3fc0bb7ad974)
