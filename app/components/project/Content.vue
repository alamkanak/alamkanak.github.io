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

/* Headers */
.project-content h1 {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--ui-text-highlighted);
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.project-content h1:first-child {
  margin-top: 0;
}

.project-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ui-text-highlighted);
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.project-content h2:first-child {
  margin-top: 0;
}

.project-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ui-text-highlighted);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.project-content h3:first-child {
  margin-top: 0;
}

.project-content h4 {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--ui-text-highlighted);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.project-content h4:first-child {
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
