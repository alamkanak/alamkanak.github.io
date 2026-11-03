---
title: 'PDFWeld: Private PDF Editor & Tools'
lang: en-US
tags: ['Web Development', 'UX Design']
thumbnail: /pdfweld-thumb.png
description: A private PDF studio with 21 browser-based tools for editing, compression, merging, signing, and OCR, powered by WebAssembly and local document processing.
links:
  - url: https://alamkanak.github.io/pdfweld/
    text: Open PDFWeld
    icon: mdi:file-document-edit-outline
  - url: https://github.com/alamkanak/pdfweld
    text: View on GitHub
    icon: mdi:github
info:
  - key: Role
    value: Creator and Developer
  - key: Platforms
    value: ['Web', 'Desktop', 'Mobile']
  - key: Skills involved
    value: ['Document Processing', 'WebAssembly', 'Web Workers', 'Offline Storage', 'Responsive UX']
  - key: Tech used
    value: ['React', 'TypeScript', 'Tailwind CSS', 'MuPDF', 'WebAssembly', 'IndexedDB', 'Tesseract.js']
date: 2026-11-02
---

![PDFWeld's desktop workspace with a library and tools for editing, compressing, combining, and signing PDFs](/pdfweld.png)

PDFWeld is a free, open-source PDF studio that processes documents on your device. I built it around a canvas-first editor and a collection of 21 tools, bringing PDF editing, page organization, conversion, compression, and signing into a responsive browser application.

## Local document processing

The MuPDF WebAssembly engine runs inside a Web Worker, keeping PDF processing separate from the interface. Documents stay on the device, with no application backend, accounts, analytics, or document uploads. IndexedDB stores a local library and recovery copies so work can be reopened across sessions.

## A tool for each workflow

Users can start with a task before opening a document: edit a PDF, combine files, compress documents, fill forms, add signatures, or create a PDF from images. Other tools handle splitting, extraction, rotation, watermarks, page numbering, password protection, text comparison, and certificate signing. File-processing workspaces support batches, downloadable results, and cancellation.

The editor combines selectable text, document search, annotations, signatures, form filling, and page organization. Local OCR uses Tesseract.js, while lossless compression cleans up document structure without reducing image quality.

## Desktop and phone workflows

The interface adapts from resizable desktop panes to stacked phone workspaces. A bundled sample document lets visitors explore the tools immediately. PWA support enables installation and offline reopening, and the application is distributed as a static site under the AGPL-3.0 license.
