---
title: Better RAG using Relevant Information Gain
lang: en-US
tags: ['Machine Learning']
thumbnail: ./rag-thumb.png
description: Publication on improving retrieval augmented generation (RAG) using relevant information gain.
links: [{url: 'https://arxiv.org/pdf/2407.12101', text: 'View in arxiv', icon: 'carbon:book'}]
info: [{key: "DOI", value: "10.48550/arXiv.2407.12101"}, {key: 'Role', value: 'Staff Machine Learning Engineer'}, {key: 'Affiliation', value: 'Emergence AI'}, {key: 'Skills involved', value: ['RAG', 'Machine learning']}, {key: 'Tech used', value: ['Python', 'NumPy', 'Transformers']}]
date: 2024-07-16
---
![RAG Paper](/rag.png)

## Abstract
A common way to extend the memory of large language models (LLMs) is by retrieval augmented generation (RAG), which inserts text retrieved from a larger memory into an LLM's context window. However, the context window is typically limited to several thousand tokens, which limits the number of retrieved passages that can inform a model's response. For this reason, it's important to avoid occupying context window space with redundant information by ensuring a degree of diversity among retrieved passages. At the same time, the information should also be relevant to the current task. Most prior methods that encourage diversity among retrieved results, such as Maximal Marginal Relevance (MMR), do so by incorporating an objective that explicitly trades off diversity and relevance. We propose a novel simple optimization metric based on relevant information gain, a probabilistic measure of the total information relevant to a query for a set of retrieved results. By optimizing this metric, diversity organically emerges from our system. When used as a drop-in replacement for the retrieval component of a RAG system, this method yields state-of-the-art performance on question answering tasks from the Retrieval Augmented Generation Benchmark (RGB), outperforming existing metrics that directly optimize for relevance and diversity.