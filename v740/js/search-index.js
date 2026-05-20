---
layout: null
---
const SEARCH_DOCS = {
  {% for dir in site['dirs'] %}
    {% for post in site[dir] %}
      {% if post.id != nil %}
        "{{ post.id | slugify }}": {
          "title" : "{{ post.title | xml_escape }}",
          "content": {{ post.content | strip_html | strip_new_lines | remove_chars | escape | replace: '</p>', ' ' | jsonify }},
          "url": "{{ site.baseurl }}{{ post.url | xml_escape }}"
        }
        {% endif %}
      {% unless forloop.last %}, {% endunless %}
    {% endfor %}
    {% unless forloop.last %}, {% endunless %}
  {% endfor %}
}
