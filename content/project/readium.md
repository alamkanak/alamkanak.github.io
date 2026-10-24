---
title: Readium
lang: en-US
tags: ["Machine Learning", "iOS Development", "Android Development"]
thumbnail: ./readium-thumb.png
description: An AI-powered reading app combining neural speech synthesis, word-level audio alignment, and offline voices for books, PDFs, and articles.
links:
  - url: https://apps.apple.com/us/app/readium-text-to-speech-pdf/id6798495748
    text: Download on the App Store
    icon: mdi:apple
  - url: https://readium-ai.pages.dev
    text: Visit Readium
    icon: material-symbols:home-outline
info:
  - key: Role
    value: Creator and Machine Learning Engineer
  - key: Project
    value: Independent product
  - key: Platforms
    value: ["iOS", "Android"]
  - key: Skills involved
    value:
      [
        "Neural Speech Synthesis",
        "Forced Alignment",
        "Model Serving",
        "Inference Orchestration",
        "Audio–Text Synchronization",
        "Document Processing",
      ]
  - key: Tech used
    value:
      [
        "Qwen3 TTS",
        "Qwen3 ForcedAligner",
        "Python",
        "FastAPI",
        "MLX",
        "PyTorch",
        "React Native",
        "TypeScript",
      ]
date: 2026-09-01
---

![Readium combines neural speech synthesis with synchronized word highlighting for books and documents](/readium.png)

Readium applies AI speech technology to everyday reading. It turns books, PDFs, web articles, and text documents into natural narration while highlighting the words being spoken. I built the speech integration, audio–text synchronization, and mobile reading experience, alongside a Qwen3 synthesis and alignment service for serving speech models.

## Neural text-to-speech

The app integrates cloud neural voices with native on-device speech through a shared provider interface. Readers can preview voices, adjust playback speed, and use device voices offline. The engineering work connects model-generated audio to a responsive reading experience, including sentence navigation, background playback, and native media controls.

## Aligning speech with the written word

Word-level timestamps connect narration to the source document. The playback engine maps audio position to speech marks and document offsets, keeping the highlighted word aligned with what the reader hears. Different providers' timing formats are normalized into a common representation, while chunk boundaries, seeking, and playback-rate changes must preserve that mapping.

## Qwen3 speech synthesis and forced alignment

Alongside the mobile app, I developed a Python and FastAPI service that pairs Qwen3 TTS with Qwen3 ForcedAligner. It generates speech and aligns the resulting audio with the input text to return word and character timestamps. The service exposes OpenAI-compatible speech generation and ElevenLabs-compatible audio-with-timestamps endpoints.

The serving pipeline supports Apple Silicon and NVIDIA GPU backends, with MLX and PyTorch alignment implementations. It keeps models loaded, splits long requests into manageable chunks, schedules synthesis and alignment separately, and combines audio and timestamps into a consistent result. Bounded queues and fair scheduling manage concurrent inference requests.

## Bringing inference into a reading workflow

EPUB, PDF, article, and text imports feed a shared document pipeline. Sentence chunking, audio caching, prefetching, and playback orchestration help make synthesized speech practical for long books. A React Native and Expo interface brings these systems together with adjustable typography, four reading themes, and a Project Gutenberg catalog.
