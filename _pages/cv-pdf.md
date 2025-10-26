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
    {% if site.author.email %}{{ site.author.email }}{% endif %}
    {% if site.author.location %} | {{ site.author.location }}{% endif %}
    {% if site.author.employer %} | {{ site.author.employer }}{% endif %}
  </div>
</div>

<div class="cv-section">
  <h2>Education</h2>
  <div class="education-item">
    <div class="education-line">
      <span class="institution">University of Southampton</span>
      <span class="date">2023-2027</span>
    </div>
    <div class="degree">PhD in Computer Science</div>
  </div>
  <div class="education-item">
    <div class="education-line">
      <span class="institution">University of Southampton</span>
      <span class="date">2021-2022</span>
    </div>
    <div class="degree">MSc in Data Science</div>
  </div>
  <div class="education-item">
    <div class="education-line">
      <span class="institution">University of Warwick</span>
      <span class="date">2017-2021</span>
    </div>
    <div class="degree">BSc & MSc in Mathematics, Operational Research, Statistics, and Economics</div>
  </div>
</div>

<div class="cv-section">
  <h2>Research Experience and Leadership</h2>
  <div class="experience-item">
    <div class="experience-line">
      <span class="position">Research Collaborator</span>
      <span class="date">2024.10 - Present</span>
    </div>
    <div class="company">Health System Innovation Lab, Harvard University</div>
    <div class="description">Working with Prof Rifat Atun, co-led project on global cancer research investment and R&D network analysis for the Lancet Oncology Commission for the Commonwealth. Project-managed multi-institutional team with 17 co-authors, co-developed automated text classification framework using large language models, and contributed to global collaboration network analysis for cancer research stages.</div>
  </div>
  <div class="experience-item">
    <div class="experience-line">
      <span class="position">Research Collaborator</span>
      <span class="date">2025.3 - Present</span>
    </div>
    <div class="company">NIHR Respiratory-TRC ARI National Research Strategy Group</div>
    <div class="description">Leading project on analysis of global respiratory research funding.</div>
  </div>
</div>

<div class="cv-section">
  <h2>Publications</h2>
  {% for post in site.publications reversed %}
  <div class="publication-item">
    <div class="publication-text">
      <strong>Du, A.</strong> ({{ post.date | date: "%Y" }}). {{ post.title }}. <em>{{ post.venue }}</em>{% if post.volume %}, {{ post.volume }}{% endif %}{% if post.pages %}, {{ post.pages }}{% endif %}.
    </div>
  </div>
  {% endfor %}
</div>

<div class="cv-section">
  <h2>Grants and Funding</h2>
  <div class="grant-item">
    <div class="grant-line">
      <span class="grant-title">SRI Responsive & Travel Funding</span>
      <span class="date">2025.6 - Present</span>
    </div>
    <div class="grant-details">University of Southampton | £1767 | Lead Researcher | Research investment analysis on climate change and health</div>
  </div>
  <div class="grant-item">
    <div class="grant-line">
      <span class="grant-title">Prototypes for Humanity 2025 Travel Grant</span>
      <span class="date">2025.10</span>
    </div>
    <div class="grant-details">Prototypes for Humanity | $530 | Project Leader | AI-powered platform for policy and R&D planning (selected from 3,300 submissions)</div>
  </div>
</div>

<div class="cv-section">
  <h2>Invited Talks</h2>
  {% for post in site.talks reversed %}
  <div class="talk-item">
    <div class="talk-line">
      <span class="talk-title">{{ post.title }}</span>
      <span class="date">{{ post.date | date: "%B %Y" }}</span>
    </div>
    <div class="talk-details">{{ post.venue }}{% if post.location %}, {{ post.location }}{% endif %}</div>
  </div>
  {% endfor %}
</div>

<div class="cv-section">
  <h2>Science Communication & Public Engagement</h2>
  <div class="media-item">
    <div class="media-line">
      <span class="media-title">Media Contribution</span>
    </div>
    <div class="media-details">Michael Head, Anbang Du, Markus Brede "How to save global cancer research from Trump's cuts" The Conversation, Sep 2025</div>
  </div>
  <div class="media-item">
    <div class="media-line">
      <span class="media-title">Media Coverage</span>
    </div>
    <div class="media-details">"Cancer Research Funding Skewed Toward Wealthy Countries" Technology Networks, Sep 2025; "Which countries spend the most money on cancer research?" Euronews, Sep 2025; "The Looming Cancer Research Divide: Why Global Funding Inequalities Threaten Progress" Archyde, Sep 2025; "University of Southampton study reveals major global inequalities in cancer research funding" Innovation News Network, Sep 2025; "New Study Highlights Global Disparities in Cancer Research Funding" Science Magazine, Sep 2025</div>
  </div>
</div>

<div class="cv-section">
  <h2>Supervision</h2>
  <div class="supervision-item">
    <div class="supervision-details">Second Supervisor to Kimathi Nyota: MSc Data Science (Class 2024), University of Southampton. MSc Project: Spread of scientific misconduct in co-authorship network in cancer science.</div>
  </div>
</div>

<div class="cv-section">
  <h2>Teaching</h2>
  {% for post in site.teaching reversed %}
  <div class="teaching-item">
    <div class="teaching-line">
      <span class="teaching-title">{{ post.title }}</span>
      <span class="date">{{ post.date | date: "%Y" }}</span>
    </div>
    <div class="teaching-details">{{ post.venue }}</div>
  </div>
  {% endfor %}
</div>

<div class="cv-section">
  <h2>Academic Service & Professional Memberships</h2>
  <div class="service-item">
    <div class="service-line">
      <span class="service-title">Member, Lancet Oncology Commission on Cancer in the Commonwealth</span>
    </div>
    <div class="service-details">The Lancet Oncology. Invited to serve on Commission evaluating cancer care across Commonwealth nations. Presented findings at Commonwealth Secretariat, London, with Secretary-General of Commonwealth, WHO Director-General, and health ministers. Contributing to Commission Report "Research Investment and Network" section.</div>
  </div>
  <div class="service-item">
    <div class="service-details">Reviewer, Health Science Report</div>
  </div>
</div>
