---
title: FastAPI MCP OpenAPI
lang: en-US
tags: ['Machine Learning', 'Web Development']
thumbnail: ./mcp-fastapi-thumb.png
description: An MCP server for FastAPI to expose API docs to AI agents and tools like Cursor and GitHub Copilot.
links: [{url: 'https://github.com/alamkanak/fastapi-mcp-openapi', text: 'View on Github', icon: 'mdi:github'}]
info: [{key: 'Role', value: 'Staff Machine Learning Engineer'}, {key: 'Employment', value: 'Emergence AI'}, {key: 'Skills involved', value: ['Machine Learning', 'FastAPI', 'MCP', 'Python']}, {key: 'Tech used', value: ['Python', 'FastAPI', 'MCP', 'OpenAPI', 'GitHub Copilot']}]
date: 2025-07-01
---
![An image](/mcp-fastapi.png)

An open source python library that provides Model Context Protocol (MCP) tools for FastAPI applications. It allows developers to expose their FastAPI documentations to AI agents and tools like Cursor and GitHub Copilot, enabling seamless integration and interaction with AI workflows.

## Why use this?
- Zero-effort LLM/MCP integration: Expose your FastAPI endpoints to AI agents, Cursor, GitHub Copilot, and other dev tools with a single line of code.
- Seamless API doc connectivity: Tools like Cursor and Copilot can instantly discover and use your API docs for autocompletion, endpoint introspection, and more for app development.
- Full OpenAPI support: Get detailed, resolved OpenAPI docs for every endpoint—no more guessing what your API does.
- Streamable, modern protocol: Implements the latest MCP Streamable HTTP transport for real-time, agent-friendly workflows.
- Security by default: CORS, origin validation, and session management out of the box.
- Production-ready: Used in real-world AI agent stacks and developer tools.

## Who's using this?
A FastAPI library that provides Model Context Protocol (MCP) tools for endpoint introspection and OpenAPI documentation. This library allows AI agents to discover and understand your FastAPI endpoints through MCP.

## Features
- Endpoint Discovery: Lists all available FastAPI endpoints with metadata
- OpenAPI Documentation: Provides detailed OpenAPI schema for specific endpoints with fully resolved inline schemas
- Clean Output: Removes unnecessary references and fields for minimal context usage
- MCP Streamable HTTP Transport: Full compatibility with the latest MCP protocol (2025-03-26)
- Easy Integration: Simple mounting system similar to fastapi-mcp
- Security: Built-in CORS protection and origin validation
- Focused Tool Set: Only provides tools capability - resources and prompts endpoints are disabled