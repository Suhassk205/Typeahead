# AuraType: Fast Search Typeahead System

AuraType is a high-performance, low-latency search typeahead (autocomplete) system powered by the Bun JS runtime. It provides instantaneous search suggestions, real-time query popularity updates, distributed caching via consistent hashing, and recency-aware trending rankings.

## Features
- **Low-Latency Suggestions**: Uses a Trie data structure combined with distributed caching to deliver fast response times.
- **Recency-Aware Ranking**: Implements exponential time decay to rank recently trending searches higher.
- **Write-Buffering & WAL**: Aggregates write operations in a volatile buffer while ensuring durability with a Write-Ahead Log (WAL), drastically reducing database I/O.
- **Distributed Caching**: Distributes the prefix cache across multiple virtual nodes using a Consistent Hashing algorithm.

## Getting Started

To install dependencies:
```bash
bun install
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to test the API and search suggestions.

## Dataset Initialization
To initialize the system with the pre-configured dataset of search queries:
```bash
bun run scripts/seed.ts
```