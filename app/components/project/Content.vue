<script setup lang="ts">
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

defineProps<Props>()
</script>

<template>
  <div class="prose prose-lg prose-neutral dark:prose-invert max-w-none">
    <ContentRenderer 
      :value="content" 
      class="project-content"
    />
  </div>
</template>

<style>
/* Linear.app inspired prose styling */
.project-content {
  color: var(--ui-text);
  line-height: 1.75;
}

/* A shared heading hierarchy for every project, including linked headings. */
.project-content :is(h1, h2, h3, h4, h5, h6) {
  font-family: var(--font-sans);
  color: var(--ui-text-highlighted);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.025em;
  text-wrap: balance;
  scroll-margin-top: var(--spacing-6xl);
  margin-bottom: var(--spacing-lg);
}

.project-content h1 {
  font-size: clamp(1.75rem, 1.5rem + 0.8vw, 2rem);
  font-weight: 700;
  margin-top: var(--spacing-5xl);
}

.project-content h2 {
  font-size: clamp(1.375rem, 1.2rem + 0.5vw, 1.625rem);
  margin-top: var(--spacing-5xl);
}

.project-content h3 {
  font-size: 1.25rem;
  margin-top: var(--spacing-4xl);
}

.project-content h4 {
  font-size: 1.125rem;
  margin-top: var(--spacing-3xl);
  margin-bottom: var(--spacing-md);
}

.project-content :is(h5, h6) {
  font-size: 1rem;
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-sm);
}

.project-content :is(h1, h2, h3, h4, h5, h6):first-child {
  margin-top: 0;
}

/* Paragraphs */
.project-content p {
  color: var(--ui-text);
  margin-bottom: 1.5rem;
  line-height: 1.75;
}

/* Lists */
.project-content ul {
  margin-bottom: 1.5rem;
  padding-left: 0rem;
  list-style: none;
  position: relative;
}

.project-content ul li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1rem;
}

.project-content ul li::before {
  content: "•";
  color: var(--ui-text-muted);
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
  line-height: inherit;
}

.project-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  list-style: decimal;
  position: relative;
}

.project-content ol li {
  margin-bottom: 0.5rem;
  color: var(--ui-text);
  padding-left: 0.5rem;
}

.project-content ol li::marker {
  color: var(--ui-text-muted);
  font-weight: 500;
}

.project-content li {
  color: var(--ui-text);
}

/* Nested lists */
.project-content ul ul {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
}

.project-content ul ul li::before {
  content: "◦";
  font-size: 0.875rem;
}

.project-content ul ul ul li::before {
  content: "▪";
  font-size: 0.75rem;
}

/* Links */
.project-content a {
  color: var(--ui-primary);
  text-decoration: underline;
  text-decoration-color: var(--ui-primary);
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
  opacity: 0.9;
}

.project-content a:hover {
  opacity: 1;
  text-decoration-color: var(--ui-primary);
}

/* Heading permalinks read as headings, with a clear keyboard focus state. */
.project-content :is(h1, h2, h3, h4, h5, h6) a {
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: none;
  opacity: 1;
  border-radius: var(--radius-xs);
}

.project-content :is(h1, h2, h3, h4, h5, h6) a:hover {
  color: var(--ui-text);
  text-decoration: none;
}

.project-content :is(h1, h2, h3, h4, h5, h6) a:focus-visible {
  outline: 2px solid var(--ui-primary);
  outline-offset: var(--spacing-xs);
}

/* Images */
.project-content img {
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  margin: 0 auto;
  width: 100%;
  height: auto;
  display: block;
}

/* Custom MDC components */
.project-content .tip {
  background-color: var(--color-success-50);
  border: 1px solid var(--color-success-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 2rem 0;
}

.dark .project-content .tip {
  background-color: var(--color-success-950);
  border-color: var(--color-success-800);
}

.project-content .tip .tip-title {
  color: var(--ui-success);
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-content .tip .tip-content {
  color: var(--ui-text);
}

.project-content .warning {
  background-color: var(--color-warning-50);
  border: 1px solid var(--color-warning-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 2rem 0;
}

.dark .project-content .warning {
  background-color: var(--color-warning-950);
  border-color: var(--color-warning-800);
}

.project-content .warning .warning-title {
  color: var(--ui-warning);
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-content .note {
  background-color: var(--color-info-50);
  border: 1px solid var(--color-info-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 2rem 0;
}

.dark .project-content .note {
  background-color: var(--color-info-950);
  border-color: var(--color-info-800);
}

.project-content .note .note-title {
  color: var(--ui-info);
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Code blocks */
.project-content pre {
  background-color: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.project-content code {
  background-color: var(--ui-bg-muted);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: var(--font-mono);
}

.project-content pre code {
  background-color: transparent;
  padding: 0;
  font-size: 0.875rem;
}

/* Blockquotes */
.project-content blockquote {
  border-left: 4px solid var(--ui-primary);
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--ui-text-toned);
  background-color: var(--ui-bg-muted);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  opacity: 0.8;
}

/* Tables */
.project-content table {
  width: 100%;
  margin: 2rem 0;
  border-collapse: collapse;
}

.project-content th {
  background-color: var(--ui-bg-muted);
  color: var(--ui-text-highlighted);
  font-weight: 600;
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--ui-border);
}

.project-content td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--ui-border-muted);
  color: var(--ui-text);
}

.project-content tr:last-child td {
  border-bottom: none;
}

/* Horizontal rules */
.project-content hr {
  border: none;
  border-top: 1px solid var(--ui-border);
  margin: 2rem 0;
}
</style>
