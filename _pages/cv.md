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
* 2026 - Present: Visiting Researcher, Health System Innovation Lab, Harvard University
  * Developed multiplex network models spanning funding, publication, clinical trial, and patent to study inequality, fragility and resilience in health science. (Manuscript submitted)
  * Contributed to The Health Systems Visualizer by computing country–year indicators of global cancer
  research activity (funding, publications, clinical trials, patents) and developing the project data schema
  and metadata dictionary (variable definitions, units, standardisation).
  * Leading sepsis funding and research network study.
  * Leading health AI funding and research network study.

* 2024 - Present: Workstream Lead (PhD researcher), Health System Innovation Lab, Harvard University
  * Co-led Lancet Commonwealth Oncology Commission workstream on global cancer R&D investment and collaboration networks; coordinated a 17-author, multi-institution effort.
  * Built an LLM-based text-classification pipeline to assign labels across grant/publication corpora.
  * Produced one first-authored article in The Lancet Oncology (2025) — see Publications; contributed analysis and drafting to Lancet Commonwealth Oncology Commission report (due publication 2026)
  * Invited presentation of findings at the Commonwealth Secretariat HQ (London); briefed commissioners and policymakers on gaps in research investment and network — see Invited Talks.

* 2025 - Present: Workstream Lead (PhD researcher), NIHR Respiratory-TRC ARI National Research Strategy Group
  * Lead a 2000–2023 mapping of public & philanthropic respiratory-research funding, disaggregated by disease subtype, research phase, age group, geography, communicability, cross-cutting themes, and priority areas. Manuscript submitted.
  * Coordinate ~20 collaborators across multiple countries, institutions, and disciplines.
  * Built an ML+LLM-based classification pipeline to annotate large-scale respiratory research text corpora.
  * Built models to estimate whether COVID-19 surges displaced funding for non-COVID respiratory topics.
  *	Invited presentation of findings at the NIHR Acute Respiratory Infection-National Research Strategy Group meeting — see Invited Talks.
  


Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Grants and Funding
======
* International Exchanges Grant (£5,000, Royal Society, 2026) 
* SRI Responsive & Travel Funding (£1,767, University of Southampton, 2025)
* Prototypes for Humanity 2025 Travel Grant (£378, Prototypes for Humanity, 2025)
* SRI TECN Summer School Travel Grant (£400, University of Southampton, 2025)



Entrepreneurship & Innovation
======
* Co-founder — AInotate  (pre-incorporation)                                          
  * Product: AI-assisted data-annotation platform translating my research on LLM-based text classification into a usable tool (MVP built; private demo available).
  * Recognition: 
    * Selected for Prototypes for Humanity 2025 (innovation & commercialisation focus; 3,300+ submissions from 100+ countries; competitive travel grant; see Grants).
    * Selected for Havard Health System Innovation Lab Hackathon 2026 (from 13,000+ submissions globally) 


Teaching & Supervision
======
* Teaching
  * Teaching assistant, COMP1215 Foundation of Computer Science, University of Southampton. (2023-present). 
    * Delivered weekly tutorials to a ~300 student cohort, reinforcing lecture content and guide problem solving. 
    * Authored weekly problem-sheet solutions and supported students via Q&A through module forum and email.
    * Proposed lecture-slide improvements.
  * Teaching assistant, MA1054 Mathematics for Engineering and the Environment, University of Southampton. (2023-2024). 
    * Marked weekly exercise sheet.
    * Supported students via weekly 1-to-1 tutorials (~15 students/week).

* Supervision
  *	Kimathi Nyota (MSc, University of Southampton, Class 2024)
  *	Chengyu Li (MSc Northeastern University, Class 2025)
  *	Jacquelyn Addo (Harvard University, Class 2025)
  *	Alp Karadogan (Harvard University, Class 2025)
  

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
* Associate Fellow of Advance HE
* Member, Lancet Oncology Commission on Cancer in the Commonwealth
* Reviewer, Frontiers in Research Metrics and Analytics, Health Science Report, Discovery Oncology

Science Communication & Public Engagement
======
* Media Contribution
  * Anbang Du, Michael Head, “What’s still plaguing medical philanthropy?” Alliance, Mar 2026
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