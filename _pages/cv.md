---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="cv-download-links">
  <a href="/cv-pdf/" target="_blank" class="btn btn--primary btn--large">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
      <polyline points="6,9 6,2 18,2 18,9"></polyline>
      <path d="M6,18H4a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H18"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
    Export PDF
  </a>
</div>

{% include base_path %}

Education
======
* PhD in Computer Science, University of Southampton, 2023-2027
* MSc in Data Science, University of Southampton, 2021-2022
* BSc & MSc in Mathematics, Operational Research, Statistics, and Economics, University of Warwick, 2017-2021

Research Experience and Leadership
======
* 2024.10 - Present: Project Lead, Health System Innovation Lab, Harvard University
  * Co-led Lancet Commonwealth Oncology Commission workstream on global cancer R&D investment and collaboration networks; coordinated a 17-author, multi-institution effort.
  * Built an LLM-based text-classification pipeline to assign labels across grant/publication corpora.
  * Developed multiplex, country-level network models spanning funding → publication/trial → patent to assess country positioning.
  * Contributed analysis and drafting to Lancet Commonwealth Oncology Commission report (due publication 2026); outputs include one first-authored article in The Lancet Oncology (2025) — see Publications.
  * Invited presentation of findings at the Commonwealth Secretariat HQ (London); briefed commissioners and policymakers on gaps in research investment and network — see Invited Talks.

* 2025.3 - Present: Research Collaborator, NIHR Respiratory-TRC ARI National Research Strategy Group
  * Coordinate ~20 collaborators across multiple countries, institutions, and disciplines.
  * Lead a 2000–2023 mapping of public & philanthropic respiratory-research funding, disaggregated by disease subtype, research phase, age group, geography, communicability, cross-cutting themes, and priority areas.
  * Developed machine learning and LLM text-classification frameworks to assign labels across grant/publication corpora. 
  * Quantify pandemic crowd-out / crowd-in effects: estimate whether COVID-19 surges displaced funding for non-COVID respiratory topics.
  * Planned outputs: peer-reviewed article and NIHR-facing policy brief (Q3–Q4 2026 target)


Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Grants and Funding
======
* 2025.6 - Present SRI Responsive & Travel Funding, University of Southampton
  * Amount: £1767
  * Role: Lead Researcher.
  * Description: Research investment analysis on climate change and health.
* 2025.10 - Prototypes for Humanity 2025 Travel Grant 
  * Amount: $530
  * Role: Project Leader


Entrepreneurship & Innovation
======
* 2025.10 - Present: Co-founder — AInotate  (pre-incorporation)                                          
  * Product: AI-assisted data-annotation platform translating my research on LLM-based text classification into a usable tool (MVP built; private demo available).
  * Recognition: Selected for Prototypes for Humanity 2025 (innovation & commercialisation focus; 3,300+ submissions from 100+ countries; competitive travel grant; see Grants).
  * Link: globalhealthunpacked.com/ainotate/


Teaching & Supervision
======
* Teaching
  * Teaching assistant, COMP1215 Foundation of Computer Science, University of Southampton. (2023-2025). 
    * Delivered weekly tutorials to a ~300 student cohort, reinforcing lecture content and guide problem solving. 
    * Authored weekly problem-sheet solutions and supported students via Q&A through module forum and email.
    * Proposed lecture-slide improvements.
  * Teaching assistant, MA1054 Mathematics for Engineering and the Environment, University of Southampton. (2023-2024). 
    * Marked weekly exercise sheet.
    * Supported students via weekly 1-to-1 tutorials (~15 students/week).

* Supervision
  *	Co-supervisor to one MSc Data Science student (Class 2024), University of Southampton. Project: Spread of scientific misconduct in co-authorship network in cancer science.

* Mentorship
  * Primary mentor for ~12 MSc students per academic year. University of Southampton. (2023-present)
  * Weekly term-time check-ins providing pastoral support and academic guidance (study planning, assessment strategies, careers advice, and signposting to wellbeing services)

<!-- Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->

Invited Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Academic Service & Professional Memberships
======
* Member, Lancet Oncology Commission on Cancer in the Commonwealth
* Reviewer, Health Science Report

Science Communication & Public Engagement
======
* Media Contribution
  * Michael Head, Anbang Du, Markus Brede “How to save global cancer research from Trump’s cuts” The Conversation, Sep 2025
* Selected Media Coverage
  * "Cancer Research Funding Skewed Toward Wealthy Countries" Technology Networks, Sep 2025
  * "Which countries spend the most money on cancer research?" Euronews, Sep 2025
  * "The Looming Cancer Research Divide: Why Global Funding Inequalities Threaten Progress" Archyde, Sep 2025
  * "University of Southampton study reveals major global inequalities in cancer research funding" Innovation News Network, Sep 2025
  * "New Study Highlights Global Disparities in Cancer Research Funding" Science Magazine, Sep 2025  


Skills
======
* Data Analysis: Python, R, MATLAB, pandas, NumPy, scikit-learn, NetworkX/igraph, PyTorch Geometric
* ML/AI: RF, XGBoost, working knowledge of GNN/GCN, LLMs, OpenAI API
* Software Development: frontend (React/Next.js, Tailwind CSS, shadcn/ui); prototyping (Figma & Vercel v0); backend (FastAPI)