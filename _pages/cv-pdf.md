---
layout: cv-pdf
title: "CV - PDF Export"
permalink: /cv-pdf/
author_profile: false
---

{% include base_path %}

<div class="cv-header">
  <h1>{{ site.author.name }}</h1>
  <div class="contact-info">
    {% if site.author.email %}<a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>{% endif %}
    {% if site.author.location %} | {{ site.author.location }}{% endif %}
    {% if site.author.employer %} | {{ site.author.employer }}{% endif %}
  </div>
  {% if site.author.bio %}
  <div class="contact-info">{{ site.author.bio }}</div>
  {% endif %}
</div>

<div class="cv-section">
  <h2>Education</h2>
  <div class="education-item">
    <div class="education-degree">PhD in Computer Science</div>
    <div class="education-institution">University of Southampton</div>
    <div class="education-date">2023-2027</div>
  </div>
  <div class="education-item">
    <div class="education-degree">MSc in Data Science</div>
    <div class="education-institution">University of Southampton</div>
    <div class="education-date">2021-2022</div>
  </div>
  <div class="education-item">
    <div class="education-degree">BSc & MSc in Mathematics, Operational Research, Statistics, and Economics</div>
    <div class="education-institution">University of Warwick</div>
    <div class="education-date">2017-2021</div>
  </div>
</div>

<div class="cv-section">
  <h2>Research Experience and Leadership</h2>
  <div class="experience-item">
    <div class="experience-position">Research Collaborator</div>
    <div class="experience-company">Health System Innovation Lab, Harvard University</div>
    <div class="experience-date">2024.10 - Present</div>
    <div class="experience-description">
      Working with Prof Rifat Atun, I co-led the project on the analysis of global cancer research investment and R&D network for the Lancet Oncology Commission for the Commonwealth.
      <ul>
        <li>Project-managed the multi-institutional team with 17 co-authors: designed data-distribution workflows, assigned annotation tasks, oversaw data collection, and coordinated manuscript drafting and revisions.</li>
        <li>Co-developed an automated text classification framework to accurately annotate medical text data based on large language models and machine learning algorithms.</li>
        <li>Co-developed global collaboration networks for all four stages of cancer research respectively, i.e., grant applications, publications, patent, and clinical trials, to inform policymakers on the strengths and weaknesses of the research networks.</li>
        <li>Contributing original content to the Lancet Oncology Commission for the Commonwealth report which is due for publication in late 2025 or early 2026</li>
      </ul>
    </div>
  </div>
  <div class="experience-item">
    <div class="experience-position">Research Collaborator</div>
    <div class="experience-company">NIHR Respiratory-TRC ARI National Research Strategy Group</div>
    <div class="experience-date">2025.3 - Present</div>
    <div class="experience-description">
      I am leading the project on the analysis of global respiratory research funding.
    </div>
  </div>
</div>

<div class="cv-section">
  <h2>Publications</h2>
  {% for post in site.publications reversed %}
  <div class="publication-item">
    <div class="publication-title">{{ post.title }}</div>
    <div class="publication-venue">{{ post.venue }}</div>
    <div class="publication-date">{{ post.date | date: "%Y" }}</div>
    {% if post.excerpt %}
    <div class="publication-description">{{ post.excerpt }}</div>
    {% endif %}
  </div>
  {% endfor %}
</div>

<div class="cv-section">
  <h2>Grants and Funding</h2>
  <div class="experience-item">
    <div class="experience-position">SRI Responsive & Travel Funding</div>
    <div class="experience-company">University of Southampton</div>
    <div class="experience-date">2025.6 - Present</div>
    <div class="experience-description">
      Amount: £1767<br>
      Role: Lead Researcher<br>
      Description: Research investment analysis on climate change and health.
    </div>
  </div>
  <div class="experience-item">
    <div class="experience-position">Prototypes for Humanity 2025 Travel Grant</div>
    <div class="experience-company">Prototypes for Humanity</div>
    <div class="experience-date">2025.10</div>
    <div class="experience-description">
      Amount: $530<br>
      Role: Project Leader<br>
      Description: Presenting our AI-powered platform that makes policy and R&D planning agile. The platform was selected for exhibition as one of 100 projects at Prototypes for Humanity—chosen from 3,300 submissions across more than 100 countries—and the team has been invited to showcase it in Dubai in November 2025.
    </div>
  </div>
</div>

<div class="cv-section">
  <h2>Invited Talks</h2>
  {% for post in site.talks reversed %}
  <div class="talk-item">
    <div class="talk-title">{{ post.title }}</div>
    <div class="talk-venue">{{ post.venue }}</div>
    <div class="talk-date">{{ post.date | date: "%B %Y" }}</div>
    {% if post.location %}
    <div class="talk-location">{{ post.location }}</div>
    {% endif %}
    {% if post.excerpt %}
    <div class="talk-description">{{ post.excerpt }}</div>
    {% endif %}
  </div>
  {% endfor %}
</div>

<div class="cv-section">
  <h2>Science Communication & Public Engagement</h2>
  <h3>Media Contribution</h3>
  <ul>
    <li>Michael Head, Anbang Du, Markus Brede "How to save global cancer research from Trump's cuts" The Conversation, Sep 2025</li>
  </ul>
  
  <h3>Media Coverage</h3>
  <ul>
    <li>"Cancer Research Funding Skewed Toward Wealthy Countries" Technology Networks, Sep 2025</li>
    <li>"Which countries spend the most money on cancer research?" Euronews, Sep 2025</li>
    <li>"The Looming Cancer Research Divide: Why Global Funding Inequalities Threaten Progress" Archyde, Sep 2025</li>
    <li>"University of Southampton study reveals major global inequalities in cancer research funding" Innovation News Network, Sep 2025</li>
    <li>"New Study Highlights Global Disparities in Cancer Research Funding" Science Magazine, Sep 2025</li>
  </ul>
</div>

<div class="cv-section">
  <h2>Supervision</h2>
  <ul>
    <li>Second Supervisor to Kimathi Nyota: MSc Data Science (Class 2024), University of Southampton. MSc Project: Spread of scientific misconduct in co-authorship network in cancer science.</li>
  </ul>
</div>

<div class="cv-section">
  <h2>Teaching</h2>
  {% for post in site.teaching reversed %}
  <div class="teaching-item">
    <div class="teaching-title">{{ post.title }}</div>
    <div class="teaching-venue">{{ post.venue }}</div>
    <div class="teaching-date">{{ post.date | date: "%Y" }}</div>
    {% if post.excerpt %}
    <div class="teaching-description">{{ post.excerpt }}</div>
    {% endif %}
  </div>
  {% endfor %}
</div>

<div class="cv-section">
  <h2>Academic Service & Professional Memberships</h2>
  <div class="experience-item">
    <div class="experience-position">Member, Lancet Oncology Commission on Cancer in the Commonwealth</div>
    <div class="experience-company">The Lancet Oncology</div>
    <div class="experience-description">
      <ul>
        <li>Invited by The Lancet Oncology to serve on the Commission evaluating cancer care across Commonwealth nation</li>
        <li>Presented our findings at the Commonwealth Secretariat, London, with the presence of the Secretary-General of the Commonwealth, the Director-General of the WHO, and health ministers of the UK and other member states.</li>
        <li>Contributed to strategic recommendations for policy and funding priorities.</li>
        <li>Contributing to the Commission Report "Research Investment and Network" section.</li>
      </ul>
    </div>
  </div>
  <ul>
    <li>Reviewer, Health Science Report</li>
  </ul>
</div>
